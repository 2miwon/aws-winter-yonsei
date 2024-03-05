package com.yonsei.demo.controller;

// import com.yonsei.demo.service.ElasticSearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class SearchController {

    // @Autowired
    // private ElasticSearchService elasticSearchService;

    // @GetMapping("/search")
    // public Map<String, Object> search(
    // @RequestParam("query") String query,
    // @RequestParam("page") int page,
    // @RequestParam("sort") String sort) {
    // return elasticSearchService.getSearch(query, page, sort);
    // }
}