package com.ecommercesystem;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
public class RegisterUserController {


//user related endpoints (like doors to the app)
//one controller class can contain any number of endpoints
// an endpoint is single responsible (usually)
// An endpoint is a method



        RegisterUser  registeruser ;
    @Autowired //using Dependency Injection
    RegisterUserController(RegisterUser repository) {
        this.registeruser = repository;
    }



        @PostMapping ("/register") //HTTP GET method
        public User getUser(@RequestBody User user) {

            //get the user from the database
            return registeruser.registerUsername(user);
        }

        /*

        //add user endpoint (user registration)
        @PostMapping("/user")
        public void addUser(@RequestBody User user) {
            //do validations
            //ex: check whether this user is already registered
            user.emailVerified = false;

            //send an email to the user - call an external email service for this

            userRepository.save(user);
        }

        @PatchMapping("/user")
        public void updateUser(@RequestBody User user) {
            userRepository.updateUser(user);
        }

        //delete user
        //write the delete user method by yourself

        @DeleteMapping("/user")
        public void deleteUser(@RequestParam int id) {
            userRepository.deleteUser(id);
        }

        //...

*/

}
