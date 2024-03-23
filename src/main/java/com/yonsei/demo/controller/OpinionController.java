package com.yonsei.demo.controller;

import com.yonsei.demo.config.auth.dto.SessionUser;
import com.yonsei.demo.dto.OpinionDto;
import com.yonsei.demo.service.OpinionService;
import jakarta.servlet.http.HttpSession;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class OpinionController {

    private final HttpSession httpSession;
    private final OpinionService opinionService;

    public OpinionController(HttpSession httpSession, OpinionService opinionService) {
        this.httpSession = httpSession;
        this.opinionService = opinionService;
    }

    @PostMapping("/makeOpinion")
    public ResponseEntity<?> makeOpinion(@RequestBody OpinionDto opinionDto) {
        SessionUser user = (SessionUser) httpSession.getAttribute("user");
        if (user == null) {
            return new ResponseEntity<>("사용자가 로그인하지 않았습니다.", HttpStatus.UNAUTHORIZED);
        }

        opinionService.makeOpinion(user.getEmail(), opinionDto.getBillsNo(), opinionDto.getDetail(), opinionDto.getGrade());

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/opinions")
    public ResponseEntity<?> opinions(@RequestParam int billsNo) {
        List<OpinionDto> opinionDtos = opinionService.opinions(billsNo);
        return new ResponseEntity<>(opinionDtos, HttpStatus.OK);
    }
}
