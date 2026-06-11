package com.PollService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.PollModel.poll;
import com.PollRepository.PollRepository;

@Service
public class pollService {

	@Autowired
	private PollRepository Repo;
	
	public poll save(poll poll) {
		
		return Repo.save(poll);
	}
	
	public List<poll> getAll(){
		return Repo.findAll();
	}
	
	public poll findByid(Long id) {
		return Repo.findById(id).orElse(null);
	}
	
	public void vote(Long id, int option) {
		
		poll poll = Repo.findById(id).orElseThrow(() -> new RuntimeException("Poll not found"));

        if(option==1){
            poll.setOption1Votes(poll.getOption1Votes()+1);
        }else{
            poll.setOption2Votes(poll.getOption2Votes()+1);
        }

        Repo.save(poll);
    }
	}

