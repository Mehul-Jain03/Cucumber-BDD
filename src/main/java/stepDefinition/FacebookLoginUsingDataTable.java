package stepDefinition;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;

public class FacebookLoginUsingDataTable {
	
	WebDriver driver;
	
	@Given("^user on login page$")
	public void user_on_login_page()
	{
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\welcome\\Downloads\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://www.facebook.com/");
	}	

	@Then("user enter mailid and password")
	public void user_enter_mailid_and_password(DataTable credData) {
		List<String> cred = credData.row(0);
		driver.findElement(By.id("email")).sendKeys(cred.get(0));
		driver.findElement(By.id("pass")).sendKeys(cred.get(1));
	   
	}

	@Then("user clicks on login button")
	public void user_clicks_on_login_button() {
		driver.findElement(By.xpath("//input[@value = 'Log In']")).click();
	   
	}

	@Then("user is now on homepage")
	public void user_is_now_on_homepage() {
		
		String title = driver.getTitle();
		Assert.assertEquals("Facebook", title);
	   
	}
	
}
