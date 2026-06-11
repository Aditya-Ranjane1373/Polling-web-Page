package com.PollModel;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class poll {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String description;

    private String option1;

    private String option2;

    private int option1Votes;

    private int option2Votes;
    
    

	public poll(Long id, String title, String description, String option1, String option2, int option1Votes,
			int option2Votes) {
		super();
		this.id = id;
		this.title = title;
		this.description = description;
		this.option1 = option1;
		this.option2 = option2;
		this.option1Votes = option1Votes;
		this.option2Votes = option2Votes;
	}

	
	public poll() {

	}
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getOption1() {
		return option1;
	}

	public void setOption1(String option1) {
		this.option1 = option1;
	}

	public String getOption2() {
		return option2;
	}

	public void setOption2(String option2) {
		this.option2 = option2;
	}

	public int getOption1Votes() {
		return option1Votes;
	}

	public void setOption1Votes(int option1Votes) {
		this.option1Votes = option1Votes;
	}

	public int getOption2Votes() {
		return option2Votes;
	}

	public void setOption2Votes(int option2Votes) {
		this.option2Votes = option2Votes;
	}
    
    
    

}
