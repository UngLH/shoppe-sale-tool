const CronJob = require("cron").CronJob;
const axios = require("axios");

// cần cập nhật lại timestamp khi sử dụng thành ngày hiện tại : https://www.epochconverter.com/
const timestamp = 1697129578;

const shopeeCookie =
	"_fbp=fb.1.1681404321324.191876287; SPC_F=7c8Oi03KCLxng71Gv2fcAbgH88CpQN3H; REC_T_ID=946ddb10-da1a-11ed-9384-9440c93e1540; SPC_CLIENTID=N2M4T2kwM0tDTHhuyjfnxbxwdwjtvrba; _hjSessionUser_868286=eyJpZCI6IjM2NGY0MmM2LTMxNWUtNWJlYi1iODgzLTA2M2EzYzMxOGFjMSIsImNyZWF0ZWQiOjE2ODE0MDQzMjI5MDgsImV4aXN0aW5nIjp0cnVlfQ==; _ga_FV78QC1144=GS1.1.1686037220.1.0.1686037223.57.0.0; __stripe_mid=02676d21-b8ce-44d3-8201-083954588e01904647; SC_DFP=SZlpwLdStVTKRoERmevfjSmbbExPGiAj; _gcl_aw=GCL.1694706375.CjwKCAjw3oqoBhAjEiwA_UaLtkAo993jGdG_gWr6R-8kn1ZAIqsbSh6qdSWKdqT-1xv0lby3VlhIBxoCcfcQAvD_BwE; _gac_UA-61914164-6=1.1694706379.CjwKCAjw3oqoBhAjEiwA_UaLtkAo993jGdG_gWr6R-8kn1ZAIqsbSh6qdSWKdqT-1xv0lby3VlhIBxoCcfcQAvD_BwE; _gcl_au=1.1.1376995437.1697128968; SPC_SI=TKsnZQAAAABGN3FHRXE0bdDeAgAAAAAAczBCWnF3SWQ=; SPC_SEC_SI=v1-VUpnd0JCa3ZhczAxcVppaecpFGNzrIlxN2U+HejDYCUcPFkWxm9VdsZBnVyi9MfZTjvjliEO0McredZuJx5OaL86Xfvn103cPyKWeIwXZCQ=; _gid=GA1.2.2039876738.1697128970; SPC_ST=.U1FIQTdlTlF0dHU4SGJqQsES5hqCa2CxnLf6BukIuTt5KhAicRRSJQX07l9XzqU1UxcQnTGVIJ02Yk8XSzpGuEKUumbb3ihut5Z2S22PvcnwFeTO0CavVjaxSFEFIbWBduPoR1gqC371SIfVd2Y8VW5LaL9GFWK79zm910Yfua6nLj96X6kJBXV+UWIM5ZlSYpb34F7WTG7moOAhBkJfqw==; SPC_U=773477074; SPC_T_ID=EbB4lJl4zjLePK1mkJLlBRB0sGVGm7pbbaut0uB7eDWz7QU7KNV6POwRNKlrATA4YWz9B6rS2djv85MsNr5eMP1IEdxuTxw7ogX199sTWg45PUgTM7EoojReP9evvY5SOCIpTQAtnEkNiVhGgA2Ywy6dBcKTHyqSqoUW1KcXCjM=; SPC_T_IV=Q1NNY1dlbWMwbkd5ZjJidw==; SPC_R_T_ID=EbB4lJl4zjLePK1mkJLlBRB0sGVGm7pbbaut0uB7eDWz7QU7KNV6POwRNKlrATA4YWz9B6rS2djv85MsNr5eMP1IEdxuTxw7ogX199sTWg45PUgTM7EoojReP9evvY5SOCIpTQAtnEkNiVhGgA2Ywy6dBcKTHyqSqoUW1KcXCjM=; SPC_R_T_IV=Q1NNY1dlbWMwbkd5ZjJidw==; _QPWSDCXHZQA=ce0303e9-b563-4f40-9878-a02a09288fb8; REC7iLP4Q=dd9131d6-9fb6-4db6-b7d6-694c61ee4252; csrftoken=dd9U5p5ABImuQZsabZr9blnvUJVYyDFJ; AMP_TOKEN=%24NOT_FOUND; SPC_IA=1; _hjIncludedInSessionSample_868286=0; _hjSession_868286=eyJpZCI6ImRhNDBjNzk4LTY3YzQtNGM1Ny1iODYxLTk3ZTM5OGMwZjU2MSIsImNyZWF0ZWQiOjE2OTcxODU4NTk1MTMsImluU2FtcGxlIjpmYWxzZSwic2Vzc2lvbml6ZXJCZXRhRW5hYmxlZCI6ZmFsc2V9; _hjAbsoluteSessionInProgress=0; _dc_gtm_UA-61914164-6=1; _ga_M32T05RVZT=GS1.1.1697185853.184.1.1697186011.32.0.0; _ga=GA1.1.212987767.1681404322; SPC_EC=WXVHeGp1V1lhT1A0N2hlNncBQUF9rIKagqh8GrnOjR3ks+GvjjvPOOwvphhMXvZKRnpq1Ba5OOZYT7VqvHXpFXHlZOObXm+9HvkHD+IYJUw2+yWqDWD+tmD3XnpumC3RNt0/Q+Wxb9T+B71s9VLjBeHdd7F1IclqU+nwfq7q5S0=; shopee_webUnique_ccd=iHMdzg4BsvMOp7sr6qKkaQ%3D%3D%7CpqaPuiyI1eyYYOyehrj17%2Fow14lY7rnLqb27TUbvyDG1IqnA3%2FW%2FKCSw1xRONw%2FkYM3JmBLvAeg%3D%7CJS773khFj%2FhmlE%2Bp%7C08%7C3; ds=acbd033930aef921447c392f1081b2d2";

const shopeeReference =
	"https://shopee.vn/https://shopee.vn/checkout/?state=H8KLCAAAAAAAAAN1VsONwo7DmzYQfhVBwofCnsOcwo0ke8O9BwQFw7oMwr0VAUFTI8KLXcKKVMO4w6PDmgh8w6ohw4ciw6fCosKHIMOowqFAC8KkwqcCw6tDDynDsh5%2BwpMOKVHCksK3G2PCscKWZsKGM8Kcwplvwr7DscKbwpTCsMOKwqbDm8OvV8O3w4U6W8OMX8ONUsOLGzDCljZtwrrDjcKXw6vDhWbCkcKvwrPDu1lqasOVKl3CgjZow70mwrzCpsObw67Cm8KXw6l2Pl8uw7Jiwr44w49SbsKhw6nCjMO8wpNXw6bDs2zCs17Dn8OPw7PDuWLCljbCqgQRwqTCm8OlalFsw7JiwrnCnMOPw5LDl8KOSsOLw60Jw6XCs8KUwpYlUcKSwpRABcOxwqYZejXCpMKXGsK3I8Oec8K6wq3CqDDDkAUke8KtXBvCjMKlEwLChcOSOE0lwoPDvirDscKVwrRawpXCjsOZYMKaw6bDi8O7bMK9LlbCi3U2w59sNsOrTcKRwqfCs1TDkgZQw7nDrcO1w7HCg0pqfsK9w7zDlCTDn8OVw5fDi8KvPMKxw6hkwo8mJRjCpnlrwrnCksKDw6XDoXp5wpsYfMKUSVtfH39vwpJ%2Fw599w754wr18YMOJbsOqw6oBXcO9wozCrsO8w6tbwpvCoMOpe8KewpQKwo9ew75Kw5jDtcOyw47Cm8O%2FZhPCucOHwpDCs8OEw7LDq8OjP21yw7zDtMOIfMKIX3jDgsOqwqAXw6hGw67Ck1pdH8O%2FZknDvcO5Y1J3EsKrFcO%2Bf8OtPsK9w4fDh09%2Fw4jDmsK7w74zKcKvwpfDn8Okw74Obx9rUMKCwqVcwpDClsOuwoE4LTDCk8Oaw5rDlmxfwrwYw6p1w6c7DHB3wpAvwoDDocOfw5dtw5nDnsOVwrYRw59UWjUvwpvClsKwGsOYwoNyw7bCq8KxwrIvwp%2FCr2vCqxEPwq7DscKtw59sMsO%2FGWRkB8KVw5JASm7CmHLDksOew5jCjMONwrtBwokBAcOMQsOZA8OhwozDoGU1wpUSBMKBIxPDjsOwAxAuKxXCgMKqwpxGBz3CmsKsegDDn8K4FMOxalzCi8OIwrbChlQawoBowrBOSzPDsWlqw57CtlzDrsODw5k8SMO6w4BYwrhTA8OSwpIYwrbCpMKWw7pgBxzCk8KAwoxiwpbCqgDCksO%2BHmk6w57DkcK7wrvDj8KyYsOjUxzChB7DizdHw57CpHDCtMKgJcKOw4LCjVHCuE1eFMO5YjVfYRoWw43DosKRw7M5w7TCuFHDgU%2FCvMKVM0DCmMOiQ3LCszRkPMOkd1AOe8KpwofCuF%2FDkHYVfF7DiXDCuMK7LMKxwpF0J8KwRhrCqMOxwqXDqMOGcsOnMxhDNGbDn8KZC8KgWsKSw4ZDwqDCl2EKGl47wq7DkcOHDsOGw5xLE30NasOTNlHDnyt9w77CglrChFQTw6%2FDpnnDoFXDh2NPRAHDgGTCqiDDmMOUSB59wqnCqMKzworDkMK2FcKnG8OLwogTLMKIOcKQDhjCsXfCvcO7Eg7CnMKNQMKMwq9lX8Knw67CtcOCKsKCbjXDt8OQw7dywosjXDpJdsKCwrLCh8KdOnbDksKdO8Ohw60iw6wmw53DrhQxw4bDg8KJw7XDj13CpcOiwogSaHDDnsO7w6oywqotwrHCpxZCP8KZw6DDgWU5fcKDw4MkwozCp8OgwqdFDWXDnw8jGGjDmhfDolbDrMORScKPwoPCn8OwXMOGw6nCixDCmi7Cl8KTZMOpw5ZqBzExwqR%2BDcOGDFDDrsOfwr3ClwIpwqLCmMKvwrLDlSxKw4fCpHzCpF4Yw4PDhcORFWrDj8KNw6UsAsKnwp%2FDhsO8w6nCvE82HyZQw4IxLMKUw6zChgU0VMKgPRDDvWbDg8OZPxHCv0TCiRHDik42EsKaDTtjwqxpwoPDnDvCgsK2csKiw6JCTMK7eyPCqwTDhcOhWC5uLTtuw6sQw5JQwokecWQQwqfCuxHCvl0Cw5NDXcKRwpDCoH7CpBpqw6XDiSHDlm9cwrnCnsOjwonDsnTChlMcwrvDqSnCsMOzw6dabMOIAMOtw7MEaMKIZER1bFcDw5rClxk5AcO8w7rCtsOKUkRhwpHDn2fDvWdSw7XCqH9mI8OgT8KUw7%2FCmUfDtcOEw69zw55uT3tcw6AQecKCGnDCgsKdbcO6fcOuc1cVwqFNF8OXw4%2FCgzMWK8Ohw61uw6IEwpLDtcKkF8KowoHDg8OQbMKGcMOgwrgYwqjDtsO4w6jCmTgqwrvClcOacTHDsmMJw5DCjCfCux8yCMO7ScOmwpnCnwNZCgg%2FwonDjEQTwqHDpcKrTcOLH8OwwprCvsK5A8ObwobDocKxR0kqwoDDnsKNwpcYw5Adw6vDtMOSccOBw55kN8KKwp%2FDtMOiS2bDj8OrD8O0wonCoMOrw6%2FDkMKAwqJYw4XDlsKcw4%2FDvwETV8Kow7fCkgoAAA%3D%3D/?state=H8KLCAAAAAAAAAN1VsONwo7DmzYQfhVBwofCnsOcwo0sw6%2FDhj9AUMKgw4%2FDkFsREDQ1wrLDmMKlSMKFP8Kuwo3DgMKnHnIsci56CMKCHArCtEB6KsKwPsO0wpAiw6%2FDoTfDqcKQFCV5wrNZLHbDhcKZw5EMZ8Omwptvw7Q6J8KswrbDucOmw4fDpV3CuSpuFy9nwrnDpS0YS8ObLsOfw4zCn8KvFsKrwrLCvF3Cl8Kzw5w0wqpTwroCbcOQw7p1OMOmwpvDuMKfV8O5wqbCvFsuwpZlUSxPwrPCnFtowqPClX8Kw5pyVS5WwovDonbCucKcw6XCrcKqQATDqcKiWC8Ww6h%2FwrUuZsO5K0fCpcOlw7bCiGFnOcKtKsKiJMKpwoAKw6JNUcOPDcOpwqXDhm3CicO3wpxvaioMw4TCgGTCp8KVw6vCgsKxdELCoFAawqfCqWTDkF8lHUnCp1XDpcKYDcKmw7nDvMO5XcKxWsKVw4vDm1XCsVjCr8OXwqt1OcOPZ8K5wqQtwqDDssO7w4vDg3vClTXDvHLDvsKlw41%2BaC7Dp8OfeWbDkcOJDk0qMEzDs8OOciUHw4vDvcOlw7wmM8O4KMKzwq7CuTzDvMORZsO%2Fwr3DvcO8w7FyfsOPwrLDrcOUw5U9wrrDuhVdw7nDoxvCm8Khw6k7wp5VCl89w7%2FCncKxw4vDucKtN8O%2FYDPCucODwpDCs8OMw7LDi8ODwr9ddsO4w7TDgHzCiMOfeMOGwprCoBfDqEbDrsKyRl0ew75hWcOzw7ljw5ZEwonDlQrDv8K%2BcsKfw57DocOjwqc%2FZcOjXcO%2FwpVVwpfDswfCucK7w4HDm8KnGlRgKRfCpMKjOyBOC8OMwqTCscK2M8KbZ8OPwoZ6w53DuBYDw5zDrMOlM2DDuMO7bVd1N8KNbcOFd8K1VsOtwovCtiPCrAF2wq%2FCnMO9ZsKsw6zCi8Knw6vDmmnDhMKDw4PDhsOdwq3Dl8KFw78ZRGQLwrXDkkAqbsKYcsOSTk3DhsOWXWHDhMKAAGbCocOqYXBCw6zCssKGSgnCgsOAwoEJZ8O4HgjCl8K1CjhVTsKjwoMeS1bDncKDb1vCjmg1wq5DYFtDag1ANFjCp8KlwpnDuDQNw686LnfDocOdecKQw7TCgcKxbMOHFsKkJSlsRS3DtcOBw7Y4JQEXODcqQMKkwr9Hwp7Cj3fDtMOuw67CisKiXMO7FAfCoUfDssOVK8KvczhYw5ASB8Ohw4oow5xmXsKWw7NbHDxMw4PColl6w6V0Ch1uVcOwwpNuw6UMEMKmw7jCkMOcLA8ZD8O5w63ClcODTsOqIcOuV8K0wrHCgk8rGcKOdsOMEsO7SMK3AmvCpMKBGl%2FCijjClFvCn8OBGMKiNcK7aC7CgGpJWsKPwoBewoYpaHjDpcK4Rh9bGHPCr0zDsjXCqE3DlyZ9wq%2FDtMO5C2oRUW3CusKbZ8KBwpfCkcOGHsKJAnzDiVRBwrDCqcKJOsO6UlFnFcKhXSfCjlfClgknWBDCsycRGMKpd8K9w7sKw7bCnMKNQEzDh8Kqwq9TPMOWWEXDkMKdw6Yew7lebnHCgCsnw4lWUHbCv1XChyjDncK6I8OeLsOBbsOSw63CqEgxw67Cj8Ksf8KOwpVKA0rCoMOFacOvwqvDi8KowrbDhB47CMO9ZMKCB8KXw5XDtATDu0kYT8OAwo%2FCixrDisK%2BG0YwwpDCtC%2FDhMK1w5jCo8KTHgY%2Fw6HCuUrDk8KXIDTDnS1Hw4nDssKNw5UOUmJIw7wawowZwqDDnMKfw4MSQcKKKBfDi2I5S8OSMSkfwqkXwqZwaXTChcOacWM5S8OAw6nCp3HDvnjDnifCiw8TwqjDoBDDlklxw4UCGmrDkB7CiH7Cr8Ohw6wfwonDn8Khw4QIZSfDuwjDjcKGwo0xw5bCtEXDph1BWztRcyHCpsOdwr3CksOVwoLDonA8wr%2FCvcK2wozDnBYRw5JSwokecWQQwqfDmxHCvjHCgcOpS8KxSEhQP1MNwo3DssOkwpDDqjcuXMOPw7BEeTrDgylOw53DtBQYw73CuQ4bMkDDuzQBGiIZUcKdw5rDlcKCw7ZlRk4Awr%2FCvMKtwrIUUTjDrwk%2BcMO8UMO1wqTDv3Ihw4zDsQvDpQvDs8Kkwp7DuH3DisObw7XDmx4XOETCnsKgBsKcYGfDm37Cm8O7w5xVTWgbw6PDunlww4ZiJcK8w51VwpxAwrLCnsO0AjVwGMKaw40QDhwXA8OVHh89EydlXMKowpHCi8KRHyvCgHZ8M37DhiDDrCfCmRd%2BDmQlIHwQwpnCiSZBw4tXwptWP8OhNX1zB8K2DcODYw%2FCksOUAMK9Gy8xwqAjw6vDtMOSccOBXmU3woofw7XDomtmT8Orw7fDtMKRIMO2d2hAOcKfwqfDlsKcTsO%https://shopee.vn/checkout/?state=H8KLCAAAAAAAAAN1VsONwo7DmzYQfhVBwofCnsOcwo0ke8O9BwQFw7oMwr0VAUFTI8KLXcKKVMO4w6PDmgh8w6ohw4ciw6fCosKHIMOowqFAC8KkwqcCw6tDDynDsh5%2BwpMOKVHCksK3G2PCscKWZsKGM8Kcwplvwr7DscKbwpTCsMOKwqbDm8OvV8O3w4U6W8OMX8ONUsOLGzDCljZtwrrDjcKXw6vDhWbCkcKvwrPDu1lqasOVKl3CgjZow70mwrzCpsObw67Cm8KXw6l2Pl8uw7Jiwr44w49SbsKhw6nCjMO8wpNXw6bDs2zCs17Dn8OPw7PDuWLCljbCqgQRwqTCm8OlalFsw7JiwrnCnMOPw5LDl8KOSsOLw60Jw6XCs8KUwpYlUcKSwpRABcOxwqYZejXCpMKXGsK3I8Oec8K6wq3CqDDDkAUke8KtXBvCjMKlEwLChcOSOE0lwoPDvirDscKVwrRawpXCjsOZYMKaw6bDi8O7bMK9LlbCi3U2w59sNsOrTcKRwqfCs1TDkgZQw7nDrcO1w7HCg0pqfsK9w7zDlCTDn8OVw5fDi8KvPMKxw6hkwo8mJRjCpnlrwrnCksKDw6XDoXp5wpsYfMKUSVtfH39vwpJ%2Fw599w754wr18YMOJbsOqw6oBXcO9wozCrsO8w6tbwpvCoMOpe8KewpQKwo9ew75Kw5jDtcOyw47Cm8O%2FZhPCucOHwpDCs8OEw7LDq8OjP21yw7zDtMOIfMKIX3jDgsOqwqAXw6hGw67Ck1pdH8O%2FZknDvcO5Y1J3EsKrFcO%2Bf8OtPsK9w4fDh09%2Fw4jDmsK7w74zKcKvwpfDn8Okw74Obx9rUMKCwqVcwpDClsOuwoE4LTDCk8Oaw5rDlmxfwrwYw6p1w6c7DHB3wpAvwoDDocOfw5dtw5nDnsOVwrYRw59UWjUvwpvClsKwGsOYwoNyw7bCq8KxwrIvwp%2FCr2vCqxEPwq7DscKtw59sMsO%2FGWRkB8KVw5JASm7CmHLDksOew5jCjMONwrtBwokBAcOMQsOZA8OhwozDoGU1wpUSBMKBIxPDjsOwAxAuKxXCgMKqwpxGBz3CmsKsegDDn8K4FMOxalzCi8OIwrbChlQawoBowrBOSzPDsWlqw57CtlzDrsODw5k8SMO6w4BYwrhTA8OSwpIYwrbCpMKWw7pgBxzCk8KAwoxiwpbCqgDCksO%2BHmk6w57DkcK7wrvDj8KyYsOjUxzChB7DizdHw57CpHDCtMKgJcKOw4LCjVHCuE1eFMO5YjVfYRoWw43DosKRw7M5w7TCuFHDgU%2FCvMKVM0DCmMOiQ3LCszRkPMOkd1AOe8KpwofCuF%2FDkHYVfF7DiXDCuMK7LMKxwpF0J8KwRhrCqMOxwqXDqMOGcsOnMxhDNGbDn8KZC8KgWsKSw4ZDwqDCl2EKGl47wq7DkcOHDsOGw5xLE30NasOTNlHDnyt9w77CglrChFQTw6%2FDpnnDoFXDh2NPRAHDgGTCqiDDmMOUSB59wqnCqMKzworDkMK2FcKnG8OLwogTLMKIOcKQDhjCsXfCvcO7Eg7CnMKNQMKMwq9lX8Knw67CtcOCKsKCbjXDt8OQw7dywosjXDpJdsKCwrLCh8KdOnbDksKdO8Ohw60iw6wmw53DrhQxw4bDg8KJw7XDj13CpcOiwogSaHDDnsO7w6oywqotwrHCpxZCP8KZw6DDgWU5fcKDw4MkwozCp8OgwqdFDWXDnw8jGGjDmhfDolbDrMORScKPwoPCn8OwXMOGw6nCixDCmi7Cl8KTZMOpw5ZqBzExwqR%2BDcOGDFDDrsOfwr3ClwIpwqLCmMKvwrLDlSxKw4fCpHzCpF4Yw4PDhcORFWrDj8KNw6UsAsKnwp%2FDhsO8w6nCvE82HyZQw4IxLMKUw6zChgU0VMKgPRDDvWbDg8OZPxHCv0TCiRHDik42EsKaDTtjwqxpwoPDnDvCgsK2csKiw6JCTMK7eyPCqwTDhcOhWC5uLTtuw6sQw5JQwokecWQQwqfCuxHCvl0Cw5NDXcKRwpDCoH7CpBpqw6XDiSHDlm9cwrnCnsOjwonDsnTChlMcwrvDqSnCsMOzw6dabMOIAMOtw7MEaMKIZER1bFcDw5rClxk5AcO8w7rCtsOKUkRhwpHDn2fDvWdSw7XCqH9mI8OgT8KUw7%2FCmUfDtcOEw69zw55uT3tcw6AQecKCGnDCgsKdbcO6fcOuc1cVwqFNF8OXw4%2FCgzMWK8Ohw61uw6IEwpLDtcKkF8KowoHDg8OQbMKGcMOgwrgYwqjDtsO4w6jCmTgqwrvClcOacTHDsmMJw5DCjCfCux8yCMO7ScOmwpnCnwNZCgg%2FwonDjEQTwqHDpcKrTcOLH8OwwprCvsK5A8ObwobDocKxR0kqwoDDnsKNwpcYw5Adw6vDtMOSccOBw55kN8KKwp%2FDtMOiS2bDj8OrD8O0wonCoMOrw6%2FDkMKAwqJYw4XDlsKcw4%2FDvwETV8Kow7fCkgoAAA%3D%3D";

const shopID = 70658682;
const promotionID = 733546641637376;
const voucherCode = "LAMY299KA";
const shopOrder = [
	{
		shop: {
			shopid: 70658682,
		},
		items: [
			{
				itemid: 18770758192,
				modelid: 193692000654,
				quantity: 1,
				add_on_deal_id: null,
				is_add_on_sub_item: null,
				item_group_id: null,
				insurances: [],
			},
		],
	},
];
const shippingOrder = [
	{
		sync: true,
		buyer_address_data: {
			addressid: 200023707,
			address_type: 0,
			tax_address: "",
		},
		// selected_logistic_channelid: 58011,
		selected_logistic_channelid: 5001,
		shipping_id: 1,
		shoporder_indexes: [0],
		selected_preferred_delivery_time_slot_id: null,
		prescription_info: {
			images: null,
		},
		fulfillment_info: {
			fulfillment_flag: 64,
			fulfillment_source: "",
			managed_by_sbs: false,
			order_fulfillment_type: 2,
			warehouse_address_id: 0,
			is_from_overseas: false,
		},
	},
];

function applyVoucher() {
	const options = {
		method: "POST",
		url: "https://shopee.vn/api/v4/checkout/get",
		headers: {
			Origin: "https://shopee.vn",
			Referer: shopeeReference,
			Cookie: shopeeCookie,
			"Content-Type": "application/json",
		},
		data: JSON.stringify({
			_cft: [201055851],
			timestamp: timestamp,
			shoporders: shopOrder,
			selected_payment_channel_data: {
				version: 1,
				payment_channelid: 59000,
				option_info: "",
				text_info: {},
			},
			promotion_data: {
				use_coins: false,
				free_shipping_voucher_info: {
					free_shipping_voucher_id: 0,
					free_shipping_voucher_code: "",
					disabled_reason: null,
					banner_info: {
						msg: "",
						learn_more_msg: "",
					},
					required_be_channel_ids: null,
					required_spm_channels: null,
				},
				platform_vouchers: [],
				shop_vouchers: [
					{
						shopid: shopID,
						promotionid: promotionID,
						voucher_code: voucherCode,
					},
				],
				check_shop_voucher_entrances: true,
				auto_apply_shop_voucher: false,
			},
			fsv_selection_infos: [],
			device_info: {
				device_id: "",
				device_fingerprint: "",
				tongdun_blackbox: "",
				buyer_payment_info: {},
			},
			buyer_info: {
				share_to_friends_info: {
					display_toggle: false,
					enable_toggle: false,
					allow_to_share: false,
				},
				kyc_info: null,
				checkout_email: "",
			},
			cart_type: 0,
			client_id: 0,
			client_event_info: {
				is_platform_voucher_changed: false,
				is_fsv_changed: false,
			},
			tax_info: {
				tax_id: "",
			},
			shipping_orders: shippingOrder,
			order_update_info: {},
		}),
	};

	axios(options)
		.then((response) => {
			const data = response.data;
			if (data.promotion_data.invalid_message !== "") {
				console.log(data.promotion_data.invalid_message);
			} else {
				console.log("success");
				placeOrder(
					data.timestamp,
					data.checkout_price_data,
					data.promotion_data
				);
			}
		})
		.catch((error) => {
			throw new Error(error);
		});
}

function placeOrder(timestamp, checkout_price_data, promotion_data) {
	const options = {
		method: "POST",
		url: "https://shopee.vn/api/v4/checkout/place_order",
		headers: {
			Referer: shopeeReference,
			Cookie: shopeeCookie,
			Origin: "https://shopee.vn",
			"Content-Type": "application/json",
		},
		data: JSON.stringify({
			_cft: [201055851],
			timestamp: timestamp,
			shoporders: shopOrder,
			selected_payment_channel_data: {
				version: 1,
				payment_channelid: 59000,
				option_info: "",
				text_info: {},
			},
			promotion_data: promotion_data,
			fsv_selection_infos: [],
			device_info: {
				device_id: "",
				device_fingerprint: "",
				tongdun_blackbox: "",
				buyer_payment_info: {},
			},
			buyer_info: {
				share_to_friends_info: {
					display_toggle: false,
					enable_toggle: false,
					allow_to_share: false,
				},
				kyc_info: null,
				checkout_email: "",
			},
			cart_type: 0,
			client_id: 0,
			client_event_info: {
				is_platform_voucher_changed: false,
				is_fsv_changed: false,
			},
			tax_info: {
				tax_id: "",
			},
			shipping_orders: shippingOrder,
			order_update_info: {},
			checkout_price_data: checkout_price_data,
		}),
	};

	axios(options)
		.then((response) => {
			const data = response.data;
			console.log(data);
		})
		.catch((error) => {
			throw new Error(error);
		});
}

function sleep(time) {
	return new Promise((resolve) => setTimeout(resolve, time));
}

applyVoucher();

const job = new CronJob(
	"59 59 20 * * *",
	function () {
		sleep(625).then(() => {
			applyVoucher();
		});
		job.stop();
	},
	null,
	false,
	"Asia/Ho_Chi_Minh"
);
job.start();
