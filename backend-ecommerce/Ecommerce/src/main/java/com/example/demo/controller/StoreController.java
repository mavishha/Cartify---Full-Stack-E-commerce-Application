package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Repository.StoreRepository;
import com.example.demo.customexception.Resourcenotfound;
import com.example.demo.model.Store;
import org.springframework.web.bind.annotation.PostMapping;

//data is passing
@RestController
//for mapping
@RequestMapping("/store")
@CrossOrigin(origins="http://localhost:4200")
public class StoreController {
	@Autowired 
	private StoreRepository storerepo;
	
	@GetMapping("/getstore")
	public List<Store> getStore(){
		return storerepo.findAll();
		
	}
	@PostMapping("/additem")
	public Store addItems(@RequestBody Store item) {
		return storerepo.save(item);
	}
	@PostMapping("/addone")
	public Store addone(@RequestParam String name,@RequestParam int price) {
		Store store=new Store();
		store.setName(name);
		store.setPrice(price);
		return storerepo.save(store);
	}
	@GetMapping("/getoneitem/{id}")
	public Store getOneitem(@PathVariable long id) {
		return storerepo.findById(id)
		.orElseThrow(()->new Resourcenotfound("this is not valid"+id));
	}
	
}
