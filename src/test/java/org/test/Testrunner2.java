package org.test;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
@RunWith(Cucumber.class)
@CucumberOptions(features="@src/test/resources/feature/feature.txt",glue="org.test",
plugin= {"html:target"})
public class Testrunner2 {
	


}
