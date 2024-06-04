// 引用模板和中间件
const express = require("express");

// 导入model中的js例如

const Cases = require("../model/cases");
const Mytest = require("../model/mytest");

// 挂载中间件 

const People = require("../model/people");

const path = require("path");
const multer = require("multer");
const mongoose = require("mongoose");
const moment = require("moment");

const router = express.Router();

// 渲染页面，浏览器api获取本地资源然后渲染上浏览器画面
// aboutUs
router.get("/", (req, res) => {
  res.redirect("/index");
});
router.get("/index", (req, res) => {
  res.render("index.html");
});
router.get("/about", (req, res) => {
  res.render("aboutUs/about1.html");
});
router.get("/contact", (req, res) => {
  res.render("aboutUs/contact.html");
});
router.get("/honor", (req, res) => {
  res.render("aboutUs/honor.html");
});

router.get("/milestone", (req, res) => {
  res.render("aboutUs/milestone.html");
});
// cases
router.get("/cases", async (req, res) => {
  var name = req.query;
  let caselist = await Cases.findOne({
    href: name.bzlist,
  });
  // let type = await Cases.where("type").eq(name.bzlist)
  let type = await Cases.where("href", name.bzlist);
  // console.log(caselist);
  // console.log(type);
  res.render("cases/cases.html", {
    caselist,
    type,
  });
});

// CT
router.get("/autodon", (req, res) => {
  res.render("CT/autodon.html");
});

router.get("/joinus", async (req, res) => {
  let result = await People.find();
  // console.log(result)
  res.render("aboutUs/joinus.html", { person: result });
});

router.get("/dubhewer", (req, res) => {
  res.render("CT/dubhewer.html");
});
router.get("/pirox", (req, res) => {
  res.render("CT/pirox.html");
});

// newsCenter
router.get("/exhibition", (req, res) => {
  res.render("newsCenter/exhibition.html");
});
// support
router.get("/support", (req, res) => {
  res.render("support/support.html");
});
// technology
router.get("/technology", (req, res) => {
  res.render("technology/technology.html");
});

// news
// newsCenter里面的news文件夹下面的子页面
router.get("/news", (req, res) => {
  res.render("zhaoxueying/news.html");
});
router.get("/news/437.html", (req, res) => {
  res.render("zhaoxueying/437.html");
});
router.get("/news/page2", (req, res) => {
  res.render("zhaoxueying/page2.html");
});
router.get("/news/qingyezhuangfang", (req, res) => {
  res.render("zhaoxueying/qiyezhuangfang.html");
});

router.post("/contactme", async (req, res, next) => {
  try {
    const { nickname, email, phonenumber, job, leaveword } = req.body;
    //根据email和nickname从数据库查询邮箱或者用户名是否已存在
    let findTest = await Mytest.findOne({ $or: [{ email }, { nickname }] });
    //如果存在，则返回错误信息
    if (findTest) {
      res.json({
        code: 2002,
        message: "用户名或者邮箱已经存在",
      });
      console.log("存在");
    }
    //如果不存在，则保存用户信息，注册成功，并跳转登录页面
    else {
      //保存用户
      let minetest = new Mytest({
        _id: new mongoose.Types.ObjectId(),
        nickname: nickname,
        email: email,
        phonenumber: phonenumber,
        job: job,
        leaveword: leaveword,
      });
      // await mytest.save(function (err, mytest) {
      //     if (err) {
      //       res.send(err.message);
      //       return;
      //     }
      //     res.json({
      //       code: 200,
      //       message: "success",
      //       data:mytest
      //     });
      //   });
      await minetest.save();
      res.json({
        code: 200,
        message: "success",
        data: minetest,
      });
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
