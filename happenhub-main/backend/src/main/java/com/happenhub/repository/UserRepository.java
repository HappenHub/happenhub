package com.happenhub.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.happenhub.model.User;

public interface UserRepository extends MongoRepository<User, String> {
    User findByEmail(String email);
}
