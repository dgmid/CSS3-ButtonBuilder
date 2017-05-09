//
//  AppDelegate.m
//  CSS3 ButtonBuilder
//
//  Created by Duncan Midwinter on 3/10/12.
//  Copyright (c) 2012 Midwinter Duncan Grant. All rights reserved.
//

#import "AppDelegate.h"

@implementation AppDelegate
@synthesize buttonbuilder;

- (void)applicationDidFinishLaunching:(NSNotification *)aNotification
{
    
    NSString *resourcesPath = [[NSBundle mainBundle] resourcePath];
	NSString *htmlPath = [resourcesPath stringByAppendingString:@"/CSS3-ButtonBuilder/index.html"];
	[[buttonbuilder mainFrame] loadRequest:[NSURLRequest requestWithURL:[NSURL fileURLWithPath:htmlPath]]];
    
    
    WebPreferences* prefs = [WebPreferences standardPreferences];
    [prefs _setLocalStorageDatabasePath:@"~/Library/Application Support/CSS3 ButtonBuilder"];
    [prefs setLocalStorageEnabled:YES];
    [buttonbuilder setPreferences:prefs];
    
}

- (BOOL)applicationShouldTerminateAfterLastWindowClosed:(NSApplication *)theApplication {
    return YES;
}

- (IBAction)openPrefs:(id)sender {
    [buttonbuilder stringByEvaluatingJavaScriptFromString:@"openPrefsFromMenu()"];
}

- (IBAction)resetApp:(id)sender {
    [buttonbuilder stringByEvaluatingJavaScriptFromString:@"openResetFromMenu()"];
}

- (IBAction)saveButton:(id)sender {
    [buttonbuilder stringByEvaluatingJavaScriptFromString:@"openSaveFromMenu()"];
}

- (IBAction)loadButton:(id)sender {
    [buttonbuilder stringByEvaluatingJavaScriptFromString:@"openLoadFromMenu()"];
}

- (IBAction)generateCode:(id)sender {
    [buttonbuilder stringByEvaluatingJavaScriptFromString:@"openCssFromMenu()"];
}

@end
