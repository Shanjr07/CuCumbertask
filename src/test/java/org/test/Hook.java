package org.test;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hook {
	public static WebDriver dri;
	@Before
	public static void User_should_launch_the_browser() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\JAGADESHAN R\\eclipse\\jaga01\\CuCu\\dri\\chromedriver.exe");
		dri= new ChromeDriver();
		dri.get("http://www.demo.guru99.com/telecom/");
		dri.manage().window().maximize();
	}
		
	
	@After
	public static void close_tab() {
		dri.close();
		
	}

}
