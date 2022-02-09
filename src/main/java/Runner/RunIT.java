package Runner;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = {"C:\\Users\\RishavKaundal\\Desktop\\New folder\\OrangeCucumber\\src\\main\\java\\Feature File\\Login.feature"},
        glue = {"StepDefination"},
        monochrome = true,
        //strict = true,
        plugin = {"pretty", "json:/Report/Cucumber.json",
                "junit:Report/XMLReport.xml",
                "html:Report/cucumberReport"}
)

public class RunIT {

}