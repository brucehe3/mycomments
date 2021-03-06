//
//  AppDelegate.m
//  MyComments
//
//  Created by Bruce on 15-7-2.
//
//

#import "AppDelegate.h"
#import "BWCommon.h"
#import <ShareSDK/ShareSDK.h>
#import <ShareSDKConnector/ShareSDKConnector.h>

#import "WXApi.h"

#import "WeiboSDK.h"



@import GoogleMaps;

@interface AppDelegate ()

@end

@implementation AppDelegate


- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    // Override point for customization after application launch.
    [BWCommon loadCommonData];
    [GMSServices provideAPIKey:@"AIzaSyAmjS-efiXz5xtBYgzRFqDowbZ4KApieEw"];
    
    
    
    [ShareSDK registerApp:@"59afde02e570"
     
          activePlatforms:@[
                            @(SSDKPlatformTypeFacebook),
                            @(SSDKPlatformTypeTwitter),
                            //@(SSDKPlatformTypeSinaWeibo),
                            @(SSDKPlatformTypeWechat)]
                 onImport:^(SSDKPlatformType platformType)
     {
         switch (platformType)
         {
             case SSDKPlatformTypeWechat:
                 [ShareSDKConnector connectWeChat:[WXApi class]];
                 break;
             case SSDKPlatformTypeSinaWeibo:
                 [ShareSDKConnector connectWeibo:[WeiboSDK class]];
                 break;
            default:
                 break;
         }
     }
    onConfiguration:^(SSDKPlatformType platformType, NSMutableDictionary *appInfo)
     {
         
         switch (platformType)
         {
             case SSDKPlatformTypeSinaWeibo:
                 //设置新浪微博应用信息,其中authType设置为使用SSO＋Web形式授权
                 [appInfo SSDKSetupSinaWeiboByAppKey:@"3586513229"
                                           appSecret:@"b395c8748ebc529343f877abc9f8aa41"
                                         redirectUri:@"http://www.mycomments.com.my"
                                            authType:SSDKAuthTypeBoth];
                 break;
             case SSDKPlatformTypeWechat:
                 [appInfo SSDKSetupWeChatByAppId:@"wx9b9dd08be944b3ad"
                                       appSecret:@"3ac11194d13bfd1c75205486b4c25e83"];
                 break;
             case SSDKPlatformTypeFacebook:
                 //设置Facebook应用信息，其中authType设置为只用SSO形式授权
                 [appInfo SSDKSetupFacebookByAppKey:@"447958285326593"
                                          appSecret:@"d1ad021a5ad3ec4b5220d36bcfcfea1e"
                                           authType:SSDKAuthTypeBoth];
                 break;
             case SSDKPlatformTypeTwitter:
                 [appInfo SSDKSetupTwitterByConsumerKey:@"ZsCJu8mLXt2sldPa9PfUfQ" consumerSecret:@"yiArqnLlegFi66NUT0oka2xvpcgMJejIhmcnzU14Y" redirectUri:@"http://www.mycomments.com.my"];
                 break;
            default:
                 break;
         }
     }];

    return YES;
}

- (void)applicationWillResignActive:(UIApplication *)application {
    // Sent when the application is about to move from active to inactive state. This can occur for certain types of temporary interruptions (such as an incoming phone call or SMS message) or when the user quits the application and it begins the transition to the background state.
    // Use this method to pause ongoing tasks, disable timers, and throttle down OpenGL ES frame rates. Games should use this method to pause the game.
}

- (void)applicationDidEnterBackground:(UIApplication *)application {
    // Use this method to release shared resources, save user data, invalidate timers, and store enough application state information to restore your application to its current state in case it is terminated later.
    // If your application supports background execution, this method is called instead of applicationWillTerminate: when the user quits.
}

- (void)applicationWillEnterForeground:(UIApplication *)application {
    // Called as part of the transition from the background to the inactive state; here you can undo many of the changes made on entering the background.
}

- (void)applicationDidBecomeActive:(UIApplication *)application {
    // Restart any tasks that were paused (or not yet started) while the application was inactive. If the application was previously in the background, optionally refresh the user interface.
}

- (void)applicationWillTerminate:(UIApplication *)application {
    // Called when the application is about to terminate. Save data if appropriate. See also applicationDidEnterBackground:.
}

@end
