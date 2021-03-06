//
//  ShopTableViewController.m
//  MyComments
//
//  Created by Bruce on 15-7-3.
//
//

#import "ShopTableViewController.h"
#import "ShopTableViewFrame.h"
#import "ShopTableViewCell.h"
#import "BWCommon.h"
#import "AFNetworkTool.h"

@interface ShopTableViewController ()

@property (nonatomic, strong) NSArray *statusFrames;

@property (nonatomic,assign) NSUInteger region_id;
@property (nonatomic,assign) NSUInteger cid;
@property (nonatomic,assign) NSUInteger gpage;


@property (nonatomic,strong) DOPDropDownMenu *menu;


@end

@implementation ShopTableViewController

NSArray *cityData;
NSArray *provinceData;
//NSArray *townData;

NSArray *categoryData;
NSArray *subCategoryData;

@synthesize dataArray;

- (void)viewDidLoad {
    [super viewDidLoad];
    
    // Uncomment the following line to preserve selection between presentations.
    // self.clearsSelectionOnViewWillAppear = NO;
    
    // Uncomment the following line to display an Edit button in the navigation bar for this view controller.
    // self.navigationItem.rightBarButtonItem = self.editButtonItem;

    [self pagelayout];
}

- (void) pagelayout{
    
    
    CGRect rect = [[UIScreen mainScreen] bounds];
    CGSize size = rect.size;
    
    self.view.backgroundColor = [UIColor whiteColor];
    
    self.navigationController.navigationBar.barStyle = UIStatusBarStyleDefault;
    [self.navigationController.navigationBar setTintColor:[UIColor whiteColor ]];
    [self.navigationController.navigationBar setBarTintColor:[BWCommon getRedColor]];
    [self.navigationController.navigationBar setTitleTextAttributes:[NSDictionary dictionaryWithObjectsAndKeys:
    [UIColor whiteColor], NSForegroundColorAttributeName, nil]];
    self.navigationItem.title = @"MyComments";

    UIBarButtonItem *backItem=[[UIBarButtonItem alloc]init];
    backItem.title=@"";
    backItem.image=[UIImage imageNamed:@""];
    self.navigationItem.backBarButtonItem=backItem;
    
    
    UITableView *tableView = [[UITableView alloc] initWithFrame:CGRectMake(0, 42, size.width, size.height-90)];

    [self.view addSubview:tableView];
    
    self.tableView = tableView;
    self.tableView.delegate = self;
    self.tableView.dataSource = self;
    
    //UIView *v = [[UIView alloc] initWithFrame:CGRectZero];
    //[self.tableView setTableFooterView:v];
    
    
    provinceData = [BWCommon loadRegions:1 initData:@"Location"];
    categoryData = [BWCommon getDataInfo:@"category"];
    
    NSLog(@"%@",categoryData);


    // 添加下拉菜单
    self.menu = [[DOPDropDownMenu alloc] initWithOrigin:CGPointMake(0, 64) andHeight:44];
    [self.menu setSeparatorColor:[UIColor whiteColor]];
    //self.menu.indicatorColor = [BWCommon getMainColor];
    //self.menu.textSelectedColor = [BWCommon getMainColor];
    //self.menu.textColor = [BWCommon getMainColor];
    
    self.menu.delegate = self;
    self.menu.dataSource = self;
    
    [self.view addSubview:self.menu];
    
    self.gpage = 1;
    [self refreshingData:self.gpage callback:^{}];
    
    [self.tableView addLegendHeaderWithRefreshingTarget:self refreshingAction:@selector(headerRefreshing)];
    
    [self.tableView addLegendFooterWithRefreshingTarget:self refreshingAction:@selector(footerRereshing)];
    
    [self.tableView.header setTitle:@"Pull down to refresh" forState:MJRefreshHeaderStateIdle];
    [self.tableView.header setTitle:@"Release to refresh" forState:MJRefreshHeaderStatePulling];
    [self.tableView.header setTitle:@"Loading ..." forState:MJRefreshHeaderStateRefreshing];

    
}

- (void) headerRefreshing{
    
    self.gpage = 1;
    [self refreshingData:self.gpage callback:^{
        [self.tableView.header endRefreshing];
    }];
    
}

- (void )footerRereshing{
    
    [self refreshingData:++self.gpage callback:^{
        [self.tableView.footer endRefreshing];
    }];
}


- (void) setValue:(NSUInteger)region_id cid:(NSUInteger)cid{
    
    self.region_id = region_id;
    self.cid = cid;
}


- (void) refreshingData:(NSUInteger)page callback:(void(^)()) callback
{
    
    hud = [MBProgressHUD showHUDAddedTo:self.view animated:YES];
    //hud.mode = MBProgressHUDModeCustomView;
    hud.delegate=self;
    
    NSString *url =  [[BWCommon getBaseInfo:@"api_url"] stringByAppendingString:@"search"];
    
    NSMutableDictionary *postData = [[NSMutableDictionary alloc] init];
    
    [postData setValue:[NSString stringWithFormat:@"%ld",page] forKey:@"page"];
    [postData setValue:[NSString stringWithFormat:@"%ld",self.region_id] forKey:@"region_id"];
    [postData setValue:[NSString stringWithFormat:@"%ld",self.cid] forKey:@"cid"];
    //[postData setValue:[NSString stringWithFormat:@"%@",self.OrderInfo_sort] forKey:@"OrderInfo_sort"];
    
    NSLog(@"%@",url);
    //load data
    
    [AFNetworkTool postJSONWithUrl:url parameters:postData success:^(id responseObject) {
        
        NSInteger code = [[responseObject objectForKey:@"code"] integerValue];
        
        [hud removeFromSuperview];
        if(code == 200)
        {
            NSMutableDictionary *data = [responseObject objectForKey:@"data"];
            
            
            if(page == 1)
            {
                dataArray = [[data objectForKey:@"lists"] mutableCopy];
            }
            else
            {
                [dataArray addObjectsFromArray:[[data objectForKey:@"lists"] mutableCopy]];
                
            }
            
            //NSLog(@"%@",dataArray);
            
            self.tableView.footer.hidden = (dataArray.count <=0) ? YES : NO;
            
            self.statusFrames = nil;
            [self.tableView setHidden:NO];
            [self.tableView reloadData];
            
            
            if(callback){
                callback();
            }

        }
        else
        {
            NSLog(@"%@",[responseObject objectForKey:@"error"]);
        }
        
    } fail:^{
        [hud removeFromSuperview];
        NSLog(@"请求失败");
    }];
    
    
}


// DOP Dropdown Menu begin
- (NSInteger)numberOfColumnsInMenu:(DOPDropDownMenu *)menu
{
    
    return 3;
    
}

- (NSInteger)menu:(DOPDropDownMenu *)menu numberOfRowsInColumn:(NSInteger)column
{
    if (column == 0) {
        return [provinceData count];
    }
    else if(column == 1) {
        return [categoryData count];
    }
    else if(column == 2) {
        return 0;
    }
    
    return 0;
}

- (NSString *)menu:(DOPDropDownMenu *)menu titleForRowAtIndexPath:(DOPIndexPath *)indexPath
{
    
    if (indexPath.column == 0) {
        
        return [[provinceData objectAtIndex:[indexPath row]] objectForKey:@"region_name"];
        //return [[provinceData allValues] objectAtIndex:[indexPath row]];
    }
    else if(indexPath.column == 1){
        return [[categoryData objectAtIndex:[indexPath row]] objectForKey:@"cat_name"];
    }
    
    return @"";
}

- (NSInteger)menu:(DOPDropDownMenu *)menu numberOfItemsInRow:(NSInteger)row column:(NSInteger)column
{
    
    if(column == 0){
        
        NSUInteger parent_id =[[[provinceData objectAtIndex:row] objectForKey:@"region_id"]
                               integerValue];
        
        cityData = [BWCommon loadRegions:parent_id initData:@""];
        NSLog(@"%@",cityData);
        return [cityData count];
    }
    else if(column == 1){
        
        subCategoryData = [[categoryData objectAtIndex:row] objectForKey:@"childrens"];
        return [subCategoryData count];
    }
    
    return 0;
    
}

- (NSString *)menu:(DOPDropDownMenu *)menu titleForItemsInRowAtIndexPath:(DOPIndexPath *)indexPath
{
    
    if (indexPath.column == 0) {
        
        NSUInteger parent_id =[[[provinceData objectAtIndex:indexPath.row] objectForKey:@"region_id"]
                               integerValue];
        
        cityData = [BWCommon loadRegions:parent_id initData:@""];
        
        return [[cityData objectAtIndex:indexPath.item] objectForKey:@"region_name"];
        
    }
    else if(indexPath.column == 1){
        subCategoryData = [[categoryData objectAtIndex:indexPath.row] objectForKey:@"childrens"];
        return [[subCategoryData objectAtIndex:indexPath.item] objectForKey:@"cat_name"];
    }
    return nil;
    
}
-(void) menu:(DOPDropDownMenu *)menu didSelectRowAtIndexPath:(DOPIndexPath *)indexPath{
    
    if(indexPath.column == 0){
        
        //NSLog(@"item %ld",indexPath.item);
        //NSLog(@"row %ld",indexPath.row);
        
        //self.region_id = (int)indexPath.row;
        //[self refreshingData:1 callback:^{}];
    }
}

//DOP Dropdown menu end.

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}


- (NSInteger)numberOfSectionsInTableView:(UITableView *)tableView {

    return 0;
}

- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section {
    
    return [dataArray count];
}

- (CGFloat)tableView:(UITableView *)tableView heightForRowAtIndexPath:(NSIndexPath *)indexPath
{

    ShopTableViewFrame *vf = self.statusFrames[indexPath.row];

    return vf.cellHeight;
}


- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath {
    
    ShopTableViewCell *cell = [ShopTableViewCell cellWithTableView:tableView];
    
    
    cell.viewFrame = self.statusFrames[indexPath.row];
    cell.separatorInset = UIEdgeInsetsMake(0, 0, 0, 0);
    
    return cell;
}

- (NSArray *)statusFrames
{
    if (_statusFrames == nil) {
        
        NSMutableArray *models = [NSMutableArray arrayWithCapacity:dataArray.count];
        
        for (NSDictionary *dict in dataArray) {
            // 创建模型
            ShopTableViewFrame *vf = [[ShopTableViewFrame alloc] init];
            vf.data = dict;
            [models addObject:vf];
        }
        self.statusFrames = [models copy];
    }

    return _statusFrames;
}

@end
