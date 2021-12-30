package com.checkinservice.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.checkinservice.model.Checkin;

@Repository
public interface CheckinRepository extends MongoRepository<Checkin, Integer> {

}
