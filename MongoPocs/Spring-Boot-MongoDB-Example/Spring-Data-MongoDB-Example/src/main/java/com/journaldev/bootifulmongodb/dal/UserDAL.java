package com.journaldev.bootifulmongodb.dal;

import java.util.List;

import com.journaldev.bootifulmongodb.model.User;

public interface UserDAL {

	List<User> getAllUsers();

	User getUserById(String userId);

	User addNewUser(User user);

}