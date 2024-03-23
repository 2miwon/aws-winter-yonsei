package com.yonsei.demo.service;


import com.yonsei.demo.dto.OpinionDto;
import com.yonsei.demo.entity.Bills;
import com.yonsei.demo.entity.Opinion;
import com.yonsei.demo.entity.User;
import com.yonsei.demo.repository.BillsRepository;
import com.yonsei.demo.repository.OpinionRepository;
import com.yonsei.demo.repository.UserRepository;
import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Slf4j
public class OpinionService {

    private final UserRepository userRepository;
    private final BillsRepository billsRepository;
    private final OpinionRepository opinionRepository;

    public OpinionService(UserRepository userRepository, BillsRepository billsRepository, OpinionRepository opinionRepository) {
        this.userRepository = userRepository;
        this.billsRepository = billsRepository;
        this.opinionRepository = opinionRepository;
    }

    @Transactional
    public void makeOpinion(String userEmail, String billsId, String detail, int grade) {
        User user = userRepository.findByEmail(userEmail)
                .orElseThrow(() -> new IllegalArgumentException("Invalid user ID"));
        Bills bill = billsRepository.findById(Integer.getInteger(billsId))
                .orElseThrow(() -> new IllegalArgumentException("Invalid billsId"));

        Opinion opinion = new Opinion(user, bill, detail, grade);
        opinionRepository.save(opinion);
    }

    @Transactional
    public List<OpinionDto> opinions(String billsId) {
        Bills bill = billsRepository.findById(Integer.getInteger(billsId))
                .orElseThrow(() -> new IllegalArgumentException("Invalid billsId"));
        List<Opinion> opinions = opinionRepository.findAllByBillsId(Long.parseLong(String.valueOf(billsId)))
                .orElseThrow(() -> new IllegalArgumentException("bills not found"));

        return opinions.stream()
                .map(opinion -> new OpinionDto(opinion.getId(),opinion.getUser().getId(),opinion.getBills().getBill_id(), opinion.getDetail(),opinion.getGrade()))
                .collect(Collectors.toList());
    }
}
