package com.cognizant.account;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AccountController {

    @GetMapping("/accounts/{number}")
    public Map<String, Object> getAccountDetails(@PathVariable("number") String accountNumber) {
        Map<String, Object> accountDetails = new HashMap<>();
        accountDetails.put("number", accountNumber);
        accountDetails.put("type", "savings");
        accountDetails.put("balance", 234343);
        return accountDetails;
    }
}