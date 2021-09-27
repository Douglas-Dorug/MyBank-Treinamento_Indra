package com.indracompany.treinamento.model.dto;

import java.time.LocalDateTime;

import lombok.Data;

@Data
public class OperacaoContaDTO {
	
	private LocalDateTime dataHora;
	private char tpOperacao;
	private double valor;
	private String observacao;

}
