package com.yonsei.demo.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.client.RestTemplate;

@RestController
public class KeywordController {

    @PostMapping("/getKeyword")
    public ResponseEntity<String> getKeyword(@RequestBody String query) {
        String url = "https://likms.assembly.go.kr/nsrch/ark/ark_trans.do";
        String data = "{\"convert\":\"fw\",\"target\":\"common\",\"charset\":\"utf-8\",\"query\":\"" + query + "\",\"datatype\":\"json\"}";

        RestTemplate restTemplate = new RestTemplate();
        String response = restTemplate.postForObject(url, data, String.class);

        if (response != null) {
            return new ResponseEntity<>(response, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Failed to retrieve keywords", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
