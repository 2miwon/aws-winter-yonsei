package com.yonsei.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Data
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class OpinionDto {
    private Long Id;
    private Long userId;
    private String billsId;
    private String detail;
    private int grade;
}
