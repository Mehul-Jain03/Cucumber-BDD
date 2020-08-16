package runnerPackage;

import org.junit.runner.RunWith;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features = "E:\\NewEclipseProjects\\CucumberBDD\\src\\main\\java\\featuresPackage\\FreeCRMDeals.feature", 
glue = {"stepDefinition" }, 
plugin = { "pretty", "html:test-output" },
dryRun = false,
monochrome = true)

public class TestRunner {

}
