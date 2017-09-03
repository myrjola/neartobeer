//
//  neartobeerUITests.swift
//  neartobeerUITests
//
//  Created by Martin Yrjölä on 2017-04-29.
//  Copyright © 2017 Facebook. All rights reserved.
//

import XCTest

class neartobeerUITests: XCTestCase {
  
  override func setUp() {
    super.setUp()
    
    // Put setup code here. This method is called before the invocation of each test method in the class.
    
    // In UI tests it is usually best to stop immediately when a failure occurs.
    continueAfterFailure = false
    // UI tests must launch the application that they test. Doing this in setup will make sure it happens for each test method.
    
    // Automatically Allow location access.
    addUIInterruptionMonitor(withDescription: "Location Dialog") { (alert) -> Bool in
      alert.buttons["Allow"].tap()
      return true
    }
    
    // Enable screenshot support.
    let app = XCUIApplication()
    setupSnapshot(app)
    app.launch()
    
    // In UI tests it’s important to set the initial state - such as interface orientation - required for your tests before they run. The setUp method is a good place to do this.
  }
  
  override func tearDown() {
    // Put teardown code here. This method is called after the invocation of each test method in the class.
    super.tearDown()
  }
  
  func testApp() {
    // Use recording to get started writing UI tests.
    // Use XCTAssert and related functions to verify your tests produce the correct results.
    let app = XCUIApplication()
    app.tap()
    snapshot("Launch")

    app.otherElements.matching(identifier: "Center on user").element(boundBy: 0).tap()
    app.otherElements.matching(identifier: "40kr").element(boundBy: 0).tap()
    app.otherElements.matching(identifier: "Map pin").element(boundBy: 2).tap()
    snapshot("Bar clicked")
    app.tap()
    
    app.otherElements["About button"].otherElements.element.tap()
    snapshot("About us")
  }
}
