import Vue from 'vue';
export default {
  /**
   * 登录
   * username
   * password
   * @returns {null}
   */
  login(username, password) {
    return Vue.http.post('/manage/login', {
      username: username,
      password: password,
    });
  },

  getReserveList(limit, offset) {
    return Vue.http.get(
      'https://www.easy-mock.com/mock/5abbb60dbbba3f31b063e510/api/getReverseList?limit=' + limit + '&offset=' + offset
    );
  },

  /**
   * 选择兑换美元存款用户
   * POST /exchangeOrder/selectExchangeUser
   * exchangeOrderNo
   * dollarUserIdList array
   * @returns {null}
   */
  selectExchangeUser(exchangeOrderNo, dollarUserIdList) {
    return Vue.http.post('/exchangeOrder/selectExchangeUser', {
      exchangeOrderNo: exchangeOrderNo,
      dollarUserIdList: dollarUserIdList,
    });
  },
};
