package com.yonsei.demo.controller;

import com.yonsei.demo.service.ElasticsearchService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class KeywordController {

    private final ElasticsearchService elasticsearchService;

    @PostMapping("/getKeyword")
    public ResponseEntity<String> getKeyword(@RequestBody String requestJson) {
        String response = elasticsearchService.searchAutocomplete(requestJson);
        return ResponseEntity.ok(response);
    }
}
