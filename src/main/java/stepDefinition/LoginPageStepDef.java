/*package stepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;


public class LoginPageStepDef {
	
	WebDriver driver;
	
	@Given("^user on login page$")
	public void user_on_login_page()
	{
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\welcome\\Downloads\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://login.yahoo.com/");
	}	
	
	//Regex   \"(.*)\"
	
	@Then("^user enter \"(.*)\" id$")
	public void user_enter_email_id(String emailid)
	{
		driver.findElement(By.xpath("//input[@name='username']")).sendKeys(emailid);
	}
	
	@Then("^user clicks on next button$")
	public void user_clicks_on_next_button()
	{
		driver.findElement(By.xpath("//input[@id='login-signin']")).click();
	}
	
	@Then("^user quit the browser$")
	public void user_quit_the_browser()
	{
		driver.quit();
	}

}
*/