package com.yonsei.demo.controller;

import com.yonsei.demo.service.BillsService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/bills")
@RequiredArgsConstructor
public class BillsController {
    private final BillsService billsService;
    @GetMapping("/countAll")
    public long countAll() {
        return billsService.countAll();
    }
}
