$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/feature/teat3.feature");
formatter.feature({
  "name": "Adding Customer",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "name": "Create an unique Customer Id",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "User should launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Cucumber.user_should_launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click add customer option",
  "keyword": "And "
});
formatter.match({
  "location": "Cucumber.user_click_add_customer_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User giving the data for the Addcustomer option1",
  "rows": [
    {
      "cells": [
        "jaga",
        "shan",
        "abc@gamil.com",
        "salem",
        "123456789"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Cucumber.user_giving_the_data_for_the_Addcustomer_option1(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the submit button",
  "keyword": "And "
});
formatter.match({
  "location": "Cucumber.user_click_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the customer id is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Cucumber.verify_the_customer_id_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/feature/test1.feature");
formatter.feature({
  "name": "Adding Customer",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "name": "Create an unique Customer Id",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "User should launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Cucumber.user_should_launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click add customer option",
  "keyword": "And "
});
formatter.match({
  "location": "Cucumber.user_click_add_customer_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User giving the data for the Addcustomer option",
  "keyword": "When "
});
formatter.match({
  "location": "Cucumber.user_giving_the_data_for_the_Addcustomer_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the submit button",
  "keyword": "And "
});
formatter.match({
  "location": "Cucumber.user_click_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the customer id is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Cucumber.verify_the_customer_id_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/feature/test2.feature");
formatter.feature({
  "name": "Adding Customer",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Create an unique Customer Id",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "User should launch the browser",
  "keyword": "Given "
});
formatter.step({
  "name": "user click add customer option",
  "keyword": "And "
});
formatter.step({
  "name": "User Provide Vaild Details \"\u003cname\u003e\",\"\u003clast\u003e\",\"\u003cmail\u003e\",\"\u003caddress\u003e\",\"\u003cphoneno\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User click the submit button",
  "keyword": "And "
});
formatter.step({
  "name": "verify the customer id is displayed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "name",
        "last",
        "mail",
        "address",
        "phoneno"
      ]
    },
    {
      "cells": [
        "jaga",
        "shan",
        "success@gmail.com",
        "salem",
        "123456789"
      ]
    },
    {
      "cells": [
        "ranji",
        "genzo",
        "genzo@gmail.com",
        "covai",
        "321456698"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Create an unique Customer Id",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "User should launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Cucumber.user_should_launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click add customer option",
  "keyword": "And "
});
formatter.match({
  "location": "Cucumber.user_click_add_customer_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Provide Vaild Details \"jaga\",\"shan\",\"success@gmail.com\",\"salem\",\"123456789\"",
  "keyword": "When "
});
formatter.match({
  "location": "Cucumber.user_Provide_Vaild_Details(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the submit button",
  "keyword": "And "
});
formatter.match({
  "location": "Cucumber.user_click_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the customer id is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Cucumber.verify_the_customer_id_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Create an unique Customer Id",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "User should launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Cucumber.user_should_launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click add customer option",
  "keyword": "And "
});
formatter.match({
  "location": "Cucumber.user_click_add_customer_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Provide Vaild Details \"ranji\",\"genzo\",\"genzo@gmail.com\",\"covai\",\"321456698\"",
  "keyword": "When "
});
formatter.match({
  "location": "Cucumber.user_Provide_Vaild_Details(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the submit button",
  "keyword": "And "
});
formatter.match({
  "location": "Cucumber.user_click_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the customer id is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Cucumber.verify_the_customer_id_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/feature/test4.feature");
formatter.feature({
  "name": "Adding Customer",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "name": "Create an unique Customer Id",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "User should launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Cucumber.user_should_launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click add customer option",
  "keyword": "And "
});
formatter.match({
  "location": "Cucumber.user_click_add_customer_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User giving the data for the Addcustomer option2",
  "rows": [
    {
      "cells": [
        "name",
        "jaga"
      ]
    },
    {
      "cells": [
        "last",
        "shan"
      ]
    },
    {
      "cells": [
        "mail",
        "123asd@gmail.com"
      ]
    },
    {
      "cells": [
        "address",
        "salem"
      ]
    },
    {
      "cells": [
        "phno",
        "123654987987"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Cucumber.user_giving_the_data_for_the_Addcustomer_option2(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the submit button",
  "keyword": "And "
});
formatter.match({
  "location": "Cucumber.user_click_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the customer id is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Cucumber.verify_the_customer_id_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/feature/test5.feature");
formatter.feature({
  "name": "Adding Tariff plan",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "name": "Adding Traffing plan",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "User should launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Cucumber.user_should_launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click add traffing option",
  "keyword": "And "
});
formatter.match({
  "location": "Cucumber.user_click_add_traffing_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User giving the data for the Adding tariff panning option1",
  "rows": [
    {
      "cells": [
        "300",
        "30",
        "30",
        "300",
        "1",
        "10",
        "5"
      ]
    },
    {
      "cells": [
        "350",
        "35",
        "35",
        "400",
        "2",
        "20",
        "7"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Cucumber.user_giving_the_data_for_the_Adding_tariff_panning_option1(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the submit button1",
  "keyword": "And "
});
formatter.match({
  "location": "Cucumber.user_click_the_submit_button1()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the tariff plan added",
  "keyword": "Then "
});
formatter.match({
  "location": "Cucumber.verify_the_tariff_plan_added()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/feature/test6.feature");
formatter.feature({
  "name": "Adding Tariff plan",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "name": "Adding Traffing plan",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "User should launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Cucumber.user_should_launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click add traffing option",
  "keyword": "And "
});
formatter.match({
  "location": "Cucumber.user_click_add_traffing_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User giving the data for the Adding tariff panning option2",
  "rows": [
    {
      "cells": [
        "retail",
        "loalmin",
        "intmin",
        "sms",
        "lcharg",
        "intcharg",
        "smscharge"
      ]
    },
    {
      "cells": [
        "300",
        "30",
        "30",
        "300",
        "1",
        "10",
        "5"
      ]
    },
    {
      "cells": [
        "350",
        "35",
        "35",
        "400",
        "2",
        "20",
        "7"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Cucumber.user_giving_the_data_for_the_Adding_tariff_panning_option2(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the submit button1",
  "keyword": "And "
});
formatter.match({
  "location": "Cucumber.user_click_the_submit_button1()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the tariff plan added",
  "keyword": "Then "
});
formatter.match({
  "location": "Cucumber.verify_the_tariff_plan_added()"
});
formatter.result({
  "status": "passed"
});
});