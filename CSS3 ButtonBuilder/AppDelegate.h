//
//  AppDelegate.h
//  CSS3 ButtonBuilder
//
//  Created by Duncan Midwinter on 3/10/12.
//  Copyright (c) 2012 Midwinter Duncan Grant. All rights reserved.
//

#import <Cocoa/Cocoa.h>
#import <Webkit/Webkit.h>
#import <WebKit/WebPreferences.h>

@interface WebPreferences (WebPreferencesPrivate)
- (void)_setLocalStorageDatabasePath:(NSString *)path;
- (void) setLocalStorageEnabled: (BOOL) localStorageEnabled;
@end

@interface AppDelegate : NSObject <NSApplicationDelegate> {
    //@private
    WebView *buttonbuilder;
}



@property (assign) IBOutlet NSWindow *window;
@property (retain, nonatomic) IBOutlet WebView *buttonbuilder;

- (IBAction)openPrefs:(id)sender;
- (IBAction)resetApp:(id)sender;
- (IBAction)saveButton:(id)sender;
- (IBAction)loadButton:(id)sender;
- (IBAction)generateCode:(id)sender;

@end
