package stepDefinition;

import java.util.List;
import java.util.Map;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;

public class FreeCRMDeals {

	WebDriver driver;

	@Given("user should be on free crm website")
	public void user_should_be_on_free_crm_website() {
		System.setProperty("webdriver.chrome.driver", "E:\\Software\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://freecrm.com/");
		driver.findElement(By.xpath("//span[text()='Log In']")).click();
	}

	@Then("user enters mailid and password")
	public void user_enters_mailid_and_password(DataTable credsdata) {

		
		List<Map<String, String>> creds = credsdata.asMaps(String.class, String.class);
		
		for (int i = 0; i < creds.size(); i++) {

			driver.findElement(By.xpath("//input[@name='email']")).sendKeys(creds.get(i).get("email"));
			driver.findElement(By.xpath("//input[@name='password']")).sendKeys(creds.get(i).get("password"));
		}
		
		driver.findElement(By.xpath("//div[@class='ui fluid large blue submit button']")).click();

	}

	@Then("user is on home page and click on deals")
	public void user_is_on_home_page_and_click_on_deals() {
		driver.switchTo().frame(driver.findElement(By.id("main-nav")));
		driver.findElement(By.xpath("//a[@href='/deals']")).click();

	}

	@Then("enter the values")
	public void enter_the_values(DataTable values) {
		
		List<Map<String, String>> dealsValues = values.asMaps(String.class, String.class);
		
		for (int i = 0; i < dealsValues.size(); i++)
		{
			driver.findElement(By.xpath("//input[@name='title']")).sendKeys(dealsValues.get(i).get("Title"));
			driver.findElement(By.xpath("//input[@name='probability']")).sendKeys(dealsValues.get(i).get("probability"));
			driver.findElement(By.xpath("//input[@name='amount']")).sendKeys(dealsValues.get(i).get("amount"));
			driver.findElement(By.xpath("//input[@name='commission']")).sendKeys(dealsValues.get(i).get("commission"));
			driver.findElement(By.xpath("//*[@id='dashboard-toolbar']/div[2]/div/button[2]")).click();
		}

	}

	@Then("user clicks on save")
	public void user_clicks_on_save() {
		// Write code here that turns the phrase above into concrete actions
		throw new cucumber.api.PendingException();
	}

	@Then("close the browser")
	public void close_the_browser() {
		// Write code here that turns the phrase above into concrete actions
		throw new cucumber.api.PendingException();
	}

}