package org.test;

import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;
//import org.openqa.selenium.WebHook.driver;
import org.openqa.selenium.WebElement;
//import org.openqa.selenium.chrome.ChromeHook.driver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class Cucumber  {
	@Given("user click add traffing option")
	public void user_click_add_traffing_option() {
	Hook.dri.findElement(By.xpath("//a[text()='Add Tariff Plan']")).click();
	}

	@When("User giving the data for the Adding tariff panning option1")
	public void user_giving_the_data_for_the_Adding_tariff_panning_option1(io.cucumber.datatable.DataTable dataTable) {
	List<List<String>> data= dataTable.asLists(String.class); 
	//Hook.dri.findElement(By.xpath("//label[text()='Done']")).click();
	Hook.dri.findElement(By.id("rental1")).sendKeys(data.get(0).get(0));
	Hook.dri.findElement(By.id("local_minutes")).sendKeys(data.get(0).get(1));
	Hook.dri.findElement(By.id("inter_minutes")).sendKeys(data.get(0).get(2));
	Hook.dri.findElement(By.id("sms_pack")).sendKeys(data.get(0).get(3));
	Hook.dri.findElement(By.id("minutes_charges")).sendKeys(data.get(1).get(4));
	Hook.dri.findElement(By.id("inter_charges")).sendKeys(data.get(1).get(5));
	Hook.dri.findElement(By.id("sms_charges")).sendKeys(data.get(1).get(6));
	
	}
	
	@When("User giving the data for the Adding tariff panning option2")
	public void user_giving_the_data_for_the_Adding_tariff_panning_option2(io.cucumber.datatable.DataTable dataTable1) {
		List<Map<String,String>> data= dataTable1.asMaps(String.class,String.class); 
		//Hook.dri.findElement(By.xpath("//label[text()='Done']")).click(); 
		Hook.dri.findElement(By.id("rental1")).sendKeys(data.get(0).get("retail"));
		Hook.dri.findElement(By.id("local_minutes")).sendKeys(data.get(0).get("loalmin"));
		Hook.dri.findElement(By.id("inter_minutes")).sendKeys(data.get(0).get("intmin"));
		Hook.dri.findElement(By.id("sms_pack")).sendKeys(data.get(0).get("sms"));
		Hook.dri.findElement(By.id("minutes_charges")).sendKeys(data.get(1).get("lcharg"));
		Hook.dri.findElement(By.id("inter_charges")).sendKeys(data.get(1).get("intcharg"));
		Hook.dri.findElement(By.id("sms_charges")).sendKeys(data.get(1).get("smscharge"));
		
		}
	
	@When("User click the submit button1")
	public void user_click_the_submit_button1() {
		Hook.dri.findElement(By.name("submit")).click();   
	}
	@Then("verify the tariff plan added")
	public void verify_the_tariff_plan_added() {
		WebElement cong=Hook.dri.findElement(By.xpath("//h2[text()='Congratulation you add Tariff Plan']"));
		String s= cong.getText();
		System.out.println(s);
		Assert.assertTrue("",s.contains("Congratulation you add Tariff Plan"));
		
	}


	@Given("user click add customer option")
	public void user_click_add_customer_option() {
		Hook.dri.findElement(By.xpath("(//a[text()='Add Customer'])[1]")).click();
	  }

	@When("User giving the data for the Addcustomer option")
	public void user_giving_the_data_for_the_Addcustomer_option() {
		Hook.dri.findElement(By.xpath("//label[text()='Done']")).click();
		Hook.dri.findElement(By.id("fname")).sendKeys("a");
		Hook.dri.findElement(By.id("lname")).sendKeys("c");
		Hook.dri.findElement(By.id("email")).sendKeys("a@gmail.com");
		Hook.dri.findElement(By.xpath("//textarea[@id='message']")).sendKeys("sdfghj");
		Hook.dri.findElement(By.id("telephoneno")).sendKeys("7896545632");
		
		
	}

	@When("User Provide Vaild Details {string},{string},{string},{string},{string}")
	public void user_Provide_Vaild_Details(String name, String last, String mail, String address, String phoneno) {
		Hook.dri.findElement(By.xpath("//label[text()='Done']")).click();
		Hook.dri.findElement(By.id("fname")).sendKeys(name);
		Hook.dri.findElement(By.id("lname")).sendKeys(last);
		Hook.dri.findElement(By.id("email")).sendKeys(mail);
		Hook.dri.findElement(By.xpath("//textarea[@id='message']")).sendKeys(address);
		Hook.dri.findElement(By.id("telephoneno")).sendKeys(phoneno);
	}

	@When("User giving the data for the Addcustomer option1")
	public void user_giving_the_data_for_the_Addcustomer_option1(io.cucumber.datatable.DataTable dataTab) {
	   List<String> data = dataTab.asList(String.class);
	   Hook.dri.findElement(By.xpath("//label[text()='Done']")).click();
		Hook.dri.findElement(By.id("fname")).sendKeys(data.get(0));
		Hook.dri.findElement(By.id("lname")).sendKeys(data.get(1));
		Hook.dri.findElement(By.id("email")).sendKeys(data.get(2));
		Hook.dri.findElement(By.xpath("//textarea[@id='message']")).sendKeys(data.get(3));
		Hook.dri.findElement(By.id("telephoneno")).sendKeys(data.get(4));

	   
	}
@When("User giving the data for the Addcustomer option2")
public void user_giving_the_data_for_the_Addcustomer_option2(io.cucumber.datatable.DataTable dataTab) {
 
	   Map<String,String> data = dataTab.asMap(String.class,String.class);
	   Hook.dri.findElement(By.xpath("//label[text()='Done']")).click();
		Hook.dri.findElement(By.id("fname")).sendKeys(data.get("name"));
		Hook.dri.findElement(By.id("lname")).sendKeys(data.get("last"));
		Hook.dri.findElement(By.id("email")).sendKeys(data.get("mail"));
		Hook.dri.findElement(By.xpath("//textarea[@id='message']")).sendKeys(data.get("address"));
		Hook.dri.findElement(By.id("telephoneno")).sendKeys(data.get("phno"));

	   
	}

	@When("User click the submit button")
	public void user_click_the_submit_button() {
		Hook.dri.findElement(By.name("submit")).click();   
	}

	@Then("verify the customer id is displayed")
	public void verify_the_customer_id_is_displayed() {
		Assert.assertTrue(Hook.dri.findElement(By.xpath("(//td[@align='center'])[2]")).isDisplayed());
	   }


}
