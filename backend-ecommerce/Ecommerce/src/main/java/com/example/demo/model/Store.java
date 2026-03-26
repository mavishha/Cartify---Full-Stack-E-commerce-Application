package com.example.demo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name="store_table")
public class Store {
	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="ProductId")
	private Long id;
	@Column(name="ProductName")
	private String name;
	private String seller;
	private int price;
	//constructor
	public Store() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	//constructor with properties
	public Store(Long id, String name, String seller, int price) {
		super();
		this.id = id;
		this.name = name;
		this.seller = seller;
		this.price = price;
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getSeller() {
		return seller;
	}


	public void setSeller(String seller) {
		this.seller = seller;
	}


	public int getPrice() {
		return price;
	}


	public void setPrice(int price) {
		this.price = price;
	}
	
	//getters and setters
	
	
}
