const express = require("express");

exports.getAllUsers = (req, res, next) => {
  res.send("pinging get all users route");
};

exports.createUser = (req, res, next) => {
  res.send("Pinging create user route");
};

exports.getUser = (req, res, next) => {
  res.send("pinging get user by id");
};

exports.deleteUser = (req, res, next) => {
  res.send("pinging delete user");
};

exports.updateUser = (req, res, next) => {
  res.send("pinging update user");
};
