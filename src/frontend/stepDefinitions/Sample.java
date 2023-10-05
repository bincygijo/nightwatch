
import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;
import io.cucumber.java.en.Then;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import org.junit.Assert;
import static io.restassured.RestAssured.given;
public class ApiSteps {
  private Response response;
  private String requestBody;
  @Given("existing Server application") public void setBaseUrl() {
    RestAssured.baseURI = "https://api.example.com";
  }
  @When("I send a GET request to {string}") 
  public void sendGetRequest(String endpoint) {
    response = given().when().get(endpoint);
  }
  @When("I send a POST request to {string} with JSON:") 
  public void sendPostRequestWithJson(String endpoint, String jsonBody) {
      requestBody = jsonBody;  
      response = given() .contentType(ContentType.JSON) .body(jsonBody) .when() .post(endpoint); 
   } 
   @Then("the response should contain {string}") 
   public void verifyResponseContains(String expectedText) {
     String responseBody = response.getBody().asString(); 
     Assert.assertTrue(responseBody.contains(expectedText)); 
     } 
     @Then("the response should be in JSON format") 
     public void verifyResponseIsJson() { 
        response.then() .assertThat() .contentType(ContentType.JSON); 
    } 
    @Then("the response status code should be {int}") 
    public void verifyResponseStatusCode(int expectedStatusCode) { 
        int actualStatusCode = response.getStatusCode(); 
        Assert.assertEquals(expectedStatusCode, actualStatusCode); 
        } 
    }

    import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;
import io.cucumber.java.en.Then;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import org.junit.Assert;
import static io.restassured.RestAssured.given;
public class ApiSteps {
  private Response response;
  @Given("the base URL {string}") public void setBaseUrl(String baseUrl) {
    RestAssured.baseURI = baseUrl;
  }
  @When("I send a GET request to {string}") public void sendGetRequest(String endpoint) {
    response = given().when().get(endpoint);
  }
  @Then("the response status code should be {int}") public void verifyStatusCode(int expectedStatusCode) {
    int actualStatusCode = response.getStatusCode();
    Assert.assertEquals(expectedStatusCode, actualStatusCode);
  }
  @Then("the response should be in JSON format") public void verifyResponseIsJson() {
    response.then().assertThat().contentType(ContentType.JSON);
  }
  @When("I send a POST request to {string} with JSON:") public void sendPostRequestWithJson(String endpoint, String jsonBody) {
    response = given().contentType(ContentType.JSON).body(jsonBody).when().post(endpoint);
  }
  @Then("the response should contain {string}") public void verifyResponseContains(String expectedText) {
    String responseBody = response.getBody().asString();
    Assert.assertTrue(responseBody.contains(expectedText));
  }
}