package StepDefination;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.List;
import java.util.concurrent.TimeUnit;

public class Login {
    static WebDriver driver;

    @Given("^User is on Login Page$")
    public void user_is_on_Login_page()
    {
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(3000, TimeUnit.MILLISECONDS);
        driver.manage().window().maximize();
        driver.get("https://opensource-demo.orangehrmlive.com/");
    }

//    @When("^User enter username in username field$")
//    public void user_enters_username_in_the_username_textfield()
//    {
//        driver.findElement(By.id("txtUsername")).sendKeys("Admin");
//    }
//
//    @When("^User enter password in password field$")
//    public void user_enters_password_in_the_password_textfield()
//    {
//        driver.findElement(By.id("txtPassword")).sendKeys("admin123");
//    }
//
//    @Then("^User click on login button$")
//    public void user_clicks_on_the_Login_button()
//    {
//        driver.findElement(By.id("btnLogin")).submit();
//    }
//
//    @And("^User is on Home Page$")
//    public void user_is_on_Homepage()
//    {
//        Assert.assertEquals("OrangeHRM",driver.getTitle());
//    }
//}
@When("^Enters the username and password$")
public void Enters_the_username_and_password( io.cucumber.datatable.DataTable dataTable)
{
    List<List<String>> userlist = dataTable.asList(String.class);
    //List<String> userlist = dataTable.asList(String.class);
   // for( String e:userlist){
//        System.out.println(e);

      driver.findElement(By.id("txtUsername")).sendKeys((CharSequence) userlist.get(4));
      driver.findElement(By.id("txtPassword")).sendKeys((CharSequence) userlist.get(5));
}
    @When("^Click on the Login button$")
    public void Click_on_the_Login_button()
    {
        driver.findElement(By.id("btnLogin")).submit();
    }

    @Then("^User is on homepage$")
    public void User_is_on_homepage()
    {
        Assert.assertEquals(driver.getTitle(), "OrangeHRM");
        driver.close();
    }
}
