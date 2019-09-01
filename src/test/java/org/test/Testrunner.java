package org.test;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources/feature",glue="org.test",
plugin= {"html:target","rerun:src/test/resources/feature/feature.txt"})

public class Testrunner {
	
	

}
