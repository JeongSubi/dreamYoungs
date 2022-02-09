const dotenv = require("dotenv");
dotenv.config();

const axios = require("axios");
const db = require("../models/index");

module.exports = {
  /*
  test1
  */
  test1: async (req, res) => {
    res.status(200).send("test1 OK");
  },

  /*
    test2
  */
  test2: async (req, res) => {
    res.status(200).json({ test: "OK" });
  },

  /*
    5초 딜레이
  */
  delay: async (req, res) => {
    let url = `https://httpbin.org/delay/5`;
    await axios
      .get(url)
      .then((result) => {
        res.status(200).json({ message: "OK" });
      })
      .catch((err) => {
        res.status(500).json({ message: "err" });
      });
  },

  /*
  전체 유저 목록 불러오기
  */
  getUser: async (req, res) => {
    const userInfo = await db["user"].findAll();
    res.status(200).json({ userInfo: userInfo });
  },

  /*
  새로운 유저 생성하기
  */
  createUser: async (req, res) => {
    const { userName, userDesc, hasCat } = req.body;
    const newUser = {
      userName,
      userDesc,
      hasCat,
    };
    db["user"].create(newUser);
    res.status(201).json({ newUser });
  },

  /*
    해당 유저의 고양이 유무
  */
  hasCat: async (req, res) => {
    const { userIndex } = req.params;
    const userInfo = await db["user"].findOne({
      where: { index: userIndex },
    });
    if (userInfo.dataValues.hasCat === true) {
      res.status(200).json({ message: "user has cat" });
    } else if (userInfo.dataValues.hasCat === false) {
      res.status(200).json({ message: "user doesn't have cat" });
    }
  },

  /*
  해당 유저의 고양이 유무 수정
  */
  updateHasCat: async (req, res) => {
    const { hasCat } = req.body;
    const { userIndex } = req.params;
    const userInfo = await db["user"].findOne({
      where: { index: userIndex },
    });
    if (userInfo) {
      await db["user"].update({ hasCat }, { where: { index: userIndex } });
      userInfo.dataValues.hasCat = hasCat;
      res.status(200).json({ updateUserInfo: userInfo });
    } else {
      res.status(404).json({ message: "no exists userInfo" });
    }
  },

  /*
    해당 유저 삭제
  */
  deleteUser: async (req, res) => {
    const { userIndex } = req.params;
    db["user"].destroy({
      where: { index: userIndex },
    });
    res.status(200).json({ message: "delete userInfo" });
  },
};
