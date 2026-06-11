package com.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.PollModel.poll;
import com.PollService.pollService;

@RestController
@CrossOrigin(origins = "http://localhost:5175/")
@RequestMapping("poll/Api/")
public class PollController {
	
	@Autowired
	private pollService service;
	
	@PostMapping("save/poll")
	public poll svae(@RequestBody poll poll) {
		
		return service.save(poll);
	}
	
	@GetMapping("get/poll")
	public List<poll> getAll() {
		return service.getAll();
	}
	
	@GetMapping("getByid/{id}")
	public poll getByid(@PathVariable Long id) {
		return service.findByid(id);
	}
	
	
	 @PostMapping("vote/{id}")
	public String vote(@PathVariable Long id,
            @RequestParam int option){

         service.vote(id, option);

          return "Vote Submitted";
}

}
