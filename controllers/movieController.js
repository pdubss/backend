const express = require("express");

exports.getAllMovies = (req, res, next) => {
  res.send("pinging get all movies router");
};

exports.createMovie = (req, res, next) => {
  res.send("pinging create a movie route");
};
