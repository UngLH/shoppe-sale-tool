const CronJob = require("cron").CronJob;
const axios = require("axios");

console.log("Started:.....");
const shopeeCookie =
	"_fbp=fb.1.1681404321324.191876287; SPC_F=7c8Oi03KCLxng71Gv2fcAbgH88CpQN3H; REC_T_ID=946ddb10-da1a-11ed-9384-9440c93e1540; SPC_CLIENTID=N2M4T2kwM0tDTHhuyjfnxbxwdwjtvrba; _hjSessionUser_868286=eyJpZCI6IjM2NGY0MmM2LTMxNWUtNWJlYi1iODgzLTA2M2EzYzMxOGFjMSIsImNyZWF0ZWQiOjE2ODE0MDQzMjI5MDgsImV4aXN0aW5nIjp0cnVlfQ==; _ga_FV78QC1144=GS1.1.1686037220.1.0.1686037223.57.0.0; _gcl_au=1.1.879374690.1689350926; __stripe_mid=02676d21-b8ce-44d3-8201-083954588e01904647; SC_DFP=SZlpwLdStVTKRoERmevfjSmbbExPGiAj; _gcl_aw=GCL.1694706375.CjwKCAjw3oqoBhAjEiwA_UaLtkAo993jGdG_gWr6R-8kn1ZAIqsbSh6qdSWKdqT-1xv0lby3VlhIBxoCcfcQAvD_BwE; _gac_UA-61914164-6=1.1694706379.CjwKCAjw3oqoBhAjEiwA_UaLtkAo993jGdG_gWr6R-8kn1ZAIqsbSh6qdSWKdqT-1xv0lby3VlhIBxoCcfcQAvD_BwE; _med=refer; csrftoken=oDTcgHbRyYnYHY1MDM58ir08HzdcrTqO; SPC_SI=+4gSZQAAAABYaVU2bHZac9uJSgAAAAAAOGE0R0w1Y2M=; _QPWSDCXHZQA=ce0303e9-b563-4f40-9878-a02a09288fb8; REC7iLP4Q=dd9131d6-9fb6-4db6-b7d6-694c61ee4252; AMP_TOKEN=%24NOT_FOUND; _gid=GA1.2.1947856365.1696409849; SPC_ST=.bnJ2V3lXMEFlUFppSDNKbyQekQxll4YN9mOaFPRb7yjseV9mSlEbUHKtexhDrPniIB9bP7h+3lZb/jwAe1QzwkyUYdfdvYa/h4oRI1FXjWToivAdM9ul0vStAJqZdF3g4Ta2St9CxydGbrRypx+DCo9Vn75tWP/5GgYk54R5tWOcB0bV4YndQqUCMct58xWP4xz0YRi2on276+dYvRI7KA==; SPC_U=773477074; SPC_R_T_ID=kyFKp6ronkRthBh1holJ9e0QXIcNSKlVpUbfmhMe1QrqQDHb0g0RG5n47p4YyHyGnkFfBtn2Q1febp69Rnsrgj3akLh95FE2TCF+rvaEG6izB54HD1Dw50ytAYv60i/MwkCSU+Vh4CUE4aQq/Xt1SGtYQkg5MQqJCQJkmJ+taF0=; SPC_R_T_IV=dm9Icm96OHoybWhJaXVrRQ==; SPC_T_ID=kyFKp6ronkRthBh1holJ9e0QXIcNSKlVpUbfmhMe1QrqQDHb0g0RG5n47p4YyHyGnkFfBtn2Q1febp69Rnsrgj3akLh95FE2TCF+rvaEG6izB54HD1Dw50ytAYv60i/MwkCSU+Vh4CUE4aQq/Xt1SGtYQkg5MQqJCQJkmJ+taF0=; SPC_T_IV=dm9Icm96OHoybWhJaXVrRQ==; SPC_IA=1; _hjSession_868286=eyJpZCI6ImM5OTU4NGUwLWM3ZDctNDFkZC1hNTMxLWZiNzEwMDY0YTlhMSIsImNyZWF0ZWQiOjE2OTY0MTAwNzg5NzMsImluU2FtcGxlIjpmYWxzZSwic2Vzc2lvbml6ZXJCZXRhRW5hYmxlZCI6ZmFsc2V9; _hjAbsoluteSessionInProgress=1; _ga=GA1.1.212987767.1681404322; shopee_webUnique_ccd=39RLb3VXBVt8bXXQS1yqDQ%3D%3D%7CfzHvNvE5UrL3LMaj6488%2F3pEruD1Ua1GXr8pypaEyYNxtnmLzK94BwNjbrWgVEQxa%2BX7xOv0opF2yQ%3D%3D%7CCMwIMqzckC0OIlf9%7C08%7C3; ds=4443a6723aa1d8ee511bf866f41a613a; _hjIncludedInSessionSample_868286=0; SPC_EC=YU5uUkVYZzJWWXlFZHR6Y3fvGgPe2GxI/kQKq3hyaD92B/HLUdMckIZCBNHH/aarppfsMFj99+5x02c/sEm229hwIZhIPSACLp9IFRm/BvLza29OOxuxMA/T3+9ebCFDL48L23GQLOrMkjGR3jyJWB2Ex1SZRrTmkzILGtql9Zk=; _ga_M32T05RVZT=GS1.1.1696409848.166.1.1696410608.60.0.0";

const shopeeReference =
	"https://shopee.vn/https://shopee.vn/checkout/?state=H8KLCAAAAAAAAAN1VsONwo7DmzYQfhVBwofCnsOcwo0ke8O9BwQFw7oMwr0VAUFTI8KLXcKKVMO4w6PDmgh8w6ohw4ciw6fCosKHIMOowqFAC8KkwqcCw6tDDynDsh5%2BwpMOKVHCksK3G2PCscKWZsKGM8Kcwplvwr7DscKbwpTCsMOKwqbDm8OvV8O3w4U6W8OMX8ONUsOLGzDCljZtwrrDjcKXw6vDhWbCkcKvwrPDu1lqasOVKl3CgjZow70mwrzCpsObw67Cm8KXw6l2Pl8uw7Jiwr44w49SbsKhw6nCjMO8wpNXw6bDs2zCs17Dn8OPw7PDuWLCljbCqgQRwqTCm8OlalFsw7JiwrnCnMOPw5LDl8KOSsOLw60Jw6XCs8KUwpYlUcKSwpRABcOxwqYZejXCpMKXGsK3I8Oec8K6wq3CqDDDkAUke8KtXBvCjMKlEwLChcOSOE0lwoPDvirDscKVwrRawpXCjsOZYMKaw6bDi8O7bMK9LlbCi3U2w59sNsOrTcKRwqfCs1TDkgZQw7nDrcO1w7HCg0pqfsK9w7zDlCTDn8OVw5fDi8KvPMKxw6hkwo8mJRjCpnlrwrnCksKDw6XDoXp5wpsYfMKUSVtfH39vwpJ%2Fw599w754wr18YMOJbsOqw6oBXcO9wozCrsO8w6tbwpvCoMOpe8KewpQKwo9ew75Kw5jDtcOyw47Cm8O%2FZhPCucOHwpDCs8OEw7LDq8OjP21yw7zDtMOIfMKIX3jDgsOqwqAXw6hGw67Ck1pdH8O%2FZknDvcO5Y1J3EsKrFcO%2Bf8OtPsK9w4fDh09%2Fw4jDmsK7w74zKcKvwpfDn8Okw74Obx9rUMKCwqVcwpDClsOuwoE4LTDCk8Oaw5rDlmxfwrwYw6p1w6c7DHB3wpAvwoDDocOfw5dtw5nDnsOVwrYRw59UWjUvwpvClsKwGsOYwoNyw7bCq8KxwrIvwp%2FCr2vCqxEPwq7DscKtw59sMsO%2FGWRkB8KVw5JASm7CmHLDksOew5jCjMONwrtBwokBAcOMQsOZA8OhwozDoGU1wpUSBMKBIxPDjsOwAxAuKxXCgMKqwpxGBz3CmsKsegDDn8K4FMOxalzCi8OIwrbChlQawoBowrBOSzPDsWlqw57CtlzDrsODw5k8SMO6w4BYwrhTA8OSwpIYwrbCpMKWw7pgBxzCk8KAwoxiwpbCqgDCksO%2BHmk6w57DkcK7wrvDj8KyYsOjUxzChB7DizdHw57CpHDCtMKgJcKOw4LCjVHCuE1eFMO5YjVfYRoWw43DosKRw7M5w7TCuFHDgU%2FCvMKVM0DCmMOiQ3LCszRkPMOkd1AOe8KpwofCuF%2FDkHYVfF7DiXDCuMK7LMKxwpF0J8KwRhrCqMOxwqXDqMOGcsOnMxhDNGbDn8KZC8KgWsKSw4ZDwqDCl2EKGl47wq7DkcOHDsOGw5xLE30NasOTNlHDnyt9w77CglrChFQTw6%2FDpnnDoFXDh2NPRAHDgGTCqiDDmMOUSB59wqnCqMKzworDkMK2FcKnG8OLwogTLMKIOcKQDhjCsXfCvcO7Eg7CnMKNQMKMwq9lX8Knw67CtcOCKsKCbjXDt8OQw7dywosjXDpJdsKCwrLCh8KdOnbDksKdO8Ohw60iw6wmw53DrhQxw4bDg8KJw7XDj13CpcOiwogSaHDDnsO7w6oywqotwrHCpxZCP8KZw6DDgWU5fcKDw4MkwozCp8OgwqdFDWXDnw8jGGjDmhfDolbDrMORScKPwoPCn8OwXMOGw6nCixDCmi7Cl8KTZMOpw5ZqBzExwqR%2BDcOGDFDDrsOfwr3ClwIpwqLCmMKvwrLDlSxKw4fCpHzCpF4Yw4PDhcORFWrDj8KNw6UsAsKnwp%2FDhsO8w6nCvE82HyZQw4IxLMKUw6zChgU0VMKgPRDDvWbDg8OZPxHCv0TCiRHDik42EsKaDTtjwqxpwoPDnDvCgsK2csKiw6JCTMK7eyPCqwTDhcOhWC5uLTtuw6sQw5JQwokecWQQwqfCuxHCvl0Cw5NDXcKRwpDCoH7CpBpqw6XDiSHDlm9cwrnCnsOjwonDsnTChlMcwrvDqSnCsMOzw6dabMOIAMOtw7MEaMKIZER1bFcDw5rClxk5AcO8w7rCtsOKUkRhwpHDn2fDvWdSw7XCqH9mI8OgT8KUw7%2FCmUfDtcOEw69zw55uT3tcw6AQecKCGnDCgsKdbcO6fcOuc1cVwqFNF8OXw4%2FCgzMWK8Ohw61uw6IEwpLDtcKkF8KowoHDg8OQbMKGcMOgwrgYwqjDtsO4w6jCmTgqwrvClcOacTHDsmMJw5DCjCfCux8yCMO7ScOmwpnCnwNZCgg%2FwonDjEQTwqHDpcKrTcOLH8OwwprCvsK5A8ObwobDocKxR0kqwoDDnsKNwpcYw5Adw6vDtMOSccOBw55kN8KKwp%2FDtMOiS2bDj8OrD8O0wonCoMOrw6%2FDkMKAwqJYw4XDlsKcw4%2FDvwETV8Kow7fCkgoAAA%3D%3D/?state=H8KLCAAAAAAAAAN1VsONwo7DmzYQfhVBwofCnsOcwo0sw6%2FDhj9AUMKgw4%2FDkFsREDQ1wrLDmMKlSMKFP8Kuwo3DgMKnHnIsci56CMKCHArCtEB6KsKwPsO0wpAiw6%2FDoTfDqcKQFCV5wrNZLHbDhcKZw5EMZ8Omwptvw7Q6J8KswrbDucOmw4fDpV3CuSpuFy9nwrnDpS0YS8ObLsOfw4zCn8KvFsKrwrLCvF3Cl8Kzw5w0wqpTwroCbcOQw7p1OMOmwpvDuMKfV8O5wqbCvFsuwpZlUSxPwrPCnFtowqPClX8Kw5pyVS5WwovDonbCucKcw6XCrcKqQATDqcKiWC8Ww6h%2FwrUuZsO5K0fCpcOlw7bCiGFnOcKtKsKiJMKpwoAKw6JNUcOPDcOpwqXDhm3CicO3wpxvaioMw4TCgGTCp8KVw6vCgsKxdELCoFAawqfCqWTDkF8lHUnCp1XDpcKYDcKmw7nDvMO5XcKxWsKVw4vDm1XCsVjCr8OXwqt1OcOPZ8K5wqQtwqDDssO7w4vDg3vClTXDvHLDvsKlw41%2BaC7Dp8OfeWbDkcOJDk0qMEzDs8OOciUHw4vDvcOlw7wmM8O4KMKzwq7CuTzDvMORZsO%2Fwr3DvcO8w7FyfsOPwrLDrcOUw5U9wrrDuhVdw7nDoxvCm8Khw6k7wp5VCl89w7%2FCncKxw4vDucKtN8O%2FYDPCucODwpDCs8OMw7LDi8ODwr9ddsO4w7TDgHzCiMOfeMOGwprCoBfDqEbDrsKyRl0ew75hWcOzw7ljw5ZEwonDlQrDv8K%2BcsKfw57DocOjwqc%2FZcOjXcO%2FwpVVwpfDswfCucK7w4HDm8KnGlRgKRfCpMKjOyBOC8OMwqTCscK2M8KbZ8OPwoZ6w53DuBYDw5zDrMOlM2DDuMO7bVd1N8KNbcOFd8K1VsOtwovCtiPCrAF2wq%2FCnMO9ZsKsw6zCi8Knw6vDmmnDhMKDw4PDhsOdwq3Dl8KFw78ZRGQLwrXDkkAqbsKYcsOSTk3DhsOWXWHDhMKAAGbCocOqYXBCw6zCssKGSgnCgsOAwoEJZ8O4HgjCl8K1CjhVTsKjwoMeS1bDncKDb1vCjmg1wq5DYFtDag1ANFjCp8KlwpnDuDQNw686LnfDocOdecKQw7TCgcKxbMOHFsKkJSlsRS3DtcOBw7Y4JQEXODcqQMKkwr9Hwp7Cj3fDtMOuw67CisKiXMO7FAfCoUfDssOVK8KvczhYw5ASB8Ohw4oow5xmXsKWw7NbHDxMw4PColl6w6V0Ch1uVcOwwpNuw6UMEMKmw7jCkMOcLA8ZD8O5w63ClcODTsOqIcOuV8K0wrHCgk8rGcKOdsOMEsO7SMK3AmvCpMKBGl%2FCijjClFvCn8OBGMKiNcK7aC7CgGpJWsKPwoBewoYpaHjDpcK4Rh9bGHPCr0zDsjXCqE3DlyZ9wq%2FDtMO5C2oRUW3CusKbZ8KBwpfCkcOGHsKJAnzDiVRBwrDCqcKJOsO6UlFnFcKhXSfCjlfClgknWBDCsycRGMKpd8K9w7sKw7bCnMKNQEzDh8Kqwq9TPMOWWEXDkMKdw6Yew7lebnHCgCsnw4lWUHbCv1XChyjDncK6I8OeLsOBbsOSw63CqEgxw67Cj8Ksf8KOwpVKA0rCoMOFacOvwqvDi8KowrbDhB47CMO9ZMKCB8KXw5XDtATDu0kYT8OAwo%2FCixrDisK%2BG0YwwpDCtC%2FDhMK1w5jCo8KTHgY%2Fw6HCuUrDk8KXIDTDnS1Hw4nDssKNw5UOUmJIw7wawowZwqDDnMKfw4MSQcKKKBfDi2I5S8OSMSkfwqkXwqZwaXTChcOacWM5S8OAw6nCp3HDvnjDnifCiw8TwqjDoBDDlklxw4UCGmrDkB7CiH7Cr8Ohw6wfwonDn8Khw4QIZSfDuwjDjcKGwo0xw5bCtEXDph1BWztRcyHCpsOdwr3CksOVwoLDonA8wr%2FCvcK2wozDnBYRw5JSwokecWQQwqfDmxHCvjHCgcOpS8KxSEhQP1MNwo3DssOkwpDDqjcuXMOPw7BEeTrDgylOw53DtBQYw73CuQ4bMkDDuzQBGiIZUcKdw5rDlcKCw7ZlRk4Awr%2FCvMKtwrIUUTjDrwk%2BcMO8UMO1wqTDv3Ihw4zDsQvDpQvDs8Kkwp7DuH3DisObw7XDmx4XOETCnsKgBsKcYGfDm37Cm8O7w5xVTWgbw6PDunlww4ZiJcK8w51VwpxAwrLCnsO0AjVwGMKaw40QDhwXA8OVHh89EydlXMKowpHCi8KRHyvCgHZ8M37DhiDDrCfCmRd%2BDmQlIHwQwpnCiSZBw4tXwptWP8OhNX1zB8K2DcODYw%2FCksOUAMK9Gy8xwqAjw6vDtMOSccOBXmU3woofw7XDomtmT8Orw7fDtMKRIMO2d2hAOcKfwqfDlsKcTsO%https://shopee.vn/checkout/?state=H8KLCAAAAAAAAAN1VsONwo7DmzYQfhVBwofCnsOcwo0ke8O9BwQFw7oMwr0VAUFTI8KLXcKKVMO4w6PDmgh8w6ohw4ciw6fCosKHIMOowqFAC8KkwqcCw6tDDynDsh5%2BwpMOKVHCksK3G2PCscKWZsKGM8Kcwplvwr7DscKbwpTCsMOKwqbDm8OvV8O3w4U6W8OMX8ONUsOLGzDCljZtwrrDjcKXw6vDhWbCkcKvwrPDu1lqasOVKl3CgjZow70mwrzCpsObw67Cm8KXw6l2Pl8uw7Jiwr44w49SbsKhw6nCjMO8wpNXw6bDs2zCs17Dn8OPw7PDuWLCljbCqgQRwqTCm8OlalFsw7JiwrnCnMOPw5LDl8KOSsOLw60Jw6XCs8KUwpYlUcKSwpRABcOxwqYZejXCpMKXGsK3I8Oec8K6wq3CqDDDkAUke8KtXBvCjMKlEwLChcOSOE0lwoPDvirDscKVwrRawpXCjsOZYMKaw6bDi8O7bMK9LlbCi3U2w59sNsOrTcKRwqfCs1TDkgZQw7nDrcO1w7HCg0pqfsK9w7zDlCTDn8OVw5fDi8KvPMKxw6hkwo8mJRjCpnlrwrnCksKDw6XDoXp5wpsYfMKUSVtfH39vwpJ%2Fw599w754wr18YMOJbsOqw6oBXcO9wozCrsO8w6tbwpvCoMOpe8KewpQKwo9ew75Kw5jDtcOyw47Cm8O%2FZhPCucOHwpDCs8OEw7LDq8OjP21yw7zDtMOIfMKIX3jDgsOqwqAXw6hGw67Ck1pdH8O%2FZknDvcO5Y1J3EsKrFcO%2Bf8OtPsK9w4fDh09%2Fw4jDmsK7w74zKcKvwpfDn8Okw74Obx9rUMKCwqVcwpDClsOuwoE4LTDCk8Oaw5rDlmxfwrwYw6p1w6c7DHB3wpAvwoDDocOfw5dtw5nDnsOVwrYRw59UWjUvwpvClsKwGsOYwoNyw7bCq8KxwrIvwp%2FCr2vCqxEPwq7DscKtw59sMsO%2FGWRkB8KVw5JASm7CmHLDksOew5jCjMONwrtBwokBAcOMQsOZA8OhwozDoGU1wpUSBMKBIxPDjsOwAxAuKxXCgMKqwpxGBz3CmsKsegDDn8K4FMOxalzCi8OIwrbChlQawoBowrBOSzPDsWlqw57CtlzDrsODw5k8SMO6w4BYwrhTA8OSwpIYwrbCpMKWw7pgBxzCk8KAwoxiwpbCqgDCksO%2BHmk6w57DkcK7wrvDj8KyYsOjUxzChB7DizdHw57CpHDCtMKgJcKOw4LCjVHCuE1eFMO5YjVfYRoWw43DosKRw7M5w7TCuFHDgU%2FCvMKVM0DCmMOiQ3LCszRkPMOkd1AOe8KpwofCuF%2FDkHYVfF7DiXDCuMK7LMKxwpF0J8KwRhrCqMOxwqXDqMOGcsOnMxhDNGbDn8KZC8KgWsKSw4ZDwqDCl2EKGl47wq7DkcOHDsOGw5xLE30NasOTNlHDnyt9w77CglrChFQTw6%2FDpnnDoFXDh2NPRAHDgGTCqiDDmMOUSB59wqnCqMKzworDkMK2FcKnG8OLwogTLMKIOcKQDhjCsXfCvcO7Eg7CnMKNQMKMwq9lX8Knw67CtcOCKsKCbjXDt8OQw7dywosjXDpJdsKCwrLCh8KdOnbDksKdO8Ohw60iw6wmw53DrhQxw4bDg8KJw7XDj13CpcOiwogSaHDDnsO7w6oywqotwrHCpxZCP8KZw6DDgWU5fcKDw4MkwozCp8OgwqdFDWXDnw8jGGjDmhfDolbDrMORScKPwoPCn8OwXMOGw6nCixDCmi7Cl8KTZMOpw5ZqBzExwqR%2BDcOGDFDDrsOfwr3ClwIpwqLCmMKvwrLDlSxKw4fCpHzCpF4Yw4PDhcORFWrDj8KNw6UsAsKnwp%2FDhsO8w6nCvE82HyZQw4IxLMKUw6zChgU0VMKgPRDDvWbDg8OZPxHCv0TCiRHDik42EsKaDTtjwqxpwoPDnDvCgsK2csKiw6JCTMK7eyPCqwTDhcOhWC5uLTtuw6sQw5JQwokecWQQwqfCuxHCvl0Cw5NDXcKRwpDCoH7CpBpqw6XDiSHDlm9cwrnCnsOjwonDsnTChlMcwrvDqSnCsMOzw6dabMOIAMOtw7MEaMKIZER1bFcDw5rClxk5AcO8w7rCtsOKUkRhwpHDn2fDvWdSw7XCqH9mI8OgT8KUw7%2FCmUfDtcOEw69zw55uT3tcw6AQecKCGnDCgsKdbcO6fcOuc1cVwqFNF8OXw4%2FCgzMWK8Ohw61uw6IEwpLDtcKkF8KowoHDg8OQbMKGcMOgwrgYwqjDtsO4w6jCmTgqwrvClcOacTHDsmMJw5DCjCfCux8yCMO7ScOmwpnCnwNZCgg%2FwonDjEQTwqHDpcKrTcOLH8OwwprCvsK5A8ObwobDocKxR0kqwoDDnsKNwpcYw5Adw6vDtMOSccOBw55kN8KKwp%2FDtMOiS2bDj8OrD8O0wonCoMOrw6%2FDkMKAwqJYw4XDlsKcw4%2FDvwETV8Kow7fCkgoAAA%3D%3D";

const voucherCode = "LAMYDFGV";
const shopID = 70658682;
function placeOrder(timestamp, promotion_data, discount_value) {
	const merchandiseSubtotal = 599000; /// Tổng tiền hàng chưa giảm giá
	const shippingSubtotalBeforeDiscount = 12800; // Phí vận chuyển
	const shopOrder = [
		{
			shop: {
				shopid: 70658682,
			},
			items: [
				{
					itemid: 20375990185,
					modelid: 214040958158,
					quantity: 1,
					add_on_deal_id: null,
					is_add_on_sub_item: null,
					item_group_id: null,
					insurances: [],
				},
			],
		},
	];
	const checkoutPriceData = {
		merchandise_subtotal: merchandiseSubtotal * 100000,
		shipping_subtotal_before_discount: shippingSubtotalBeforeDiscount * 10000,
		shipping_discount_subtotal: 0,
		shipping_subtotal: shippingSubtotalBeforeDiscount * 10000,
		tax_payable: 0,
		tax_exemption: 0,
		iof_amount: 0,
		custom_tax_subtotal: 0,
		promocode_applied: discount_value * 100000,
		credit_card_promotion: null,
		shopee_coins_redeemed: null,
		group_buy_discount: 0,
		bundle_deals_discount: null,
		price_adjustment: null,
		buyer_txn_fee: 0,
		buyer_service_fee: 0,
		insurance_subtotal: 0,
		insurance_before_discount_subtotal: 0,
		insurance_discount_subtotal: 0,
		vat_subtotal: 0,
		total_payable:
			(merchandiseSubtotal + shippingSubtotalBeforeDiscount - discount_value) *
			100000,
	};

	const shippingOrder = [
		{
			sync: true,
			buyer_address_data: {
				addressid: 200023707,
				address_type: 0,
				tax_address: "",
			},
			// selected_logistic_channelid: 58011, // đơn vị vận chuyển quốc tế
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
			checkout_price_data: checkoutPriceData,
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

function saveAndGetVoucherData(voucher) {
	const config = {
		method: "POST",
		url: "https://shopee.vn/api/v2/voucher_wallet/save_voucher",
		headers: {
			Referer: shopeeReference,
			Cookie: shopeeCookie,
			Origin: "https://shopee.vn",
			"Content-Type": "application/json",
		},
		maxBodyLength: Infinity,
		data: JSON.stringify({
			voucher_code: voucher,
			need_user_voucher_status: true,
		}),
	};

	axios
		.request(config)
		.then((response) => {
			const { voucher } = response.data.data;
			const start_time = new Date(voucher.start_time);

			console.log("Lưu mã thành công!");
			console.log(
				`Thời gian bắt đầu: ${start_time.getHours()}:${start_time.getMinutes()}:${start_time.getSeconds()} `
			);

			const promotionID = voucher.promotionid;

			const discountValue = voucher.reward_value / 100000;
			const promotionData = {
				can_use_coins: true,
				use_coins: false,
				shop_vouchers: [
					{
						shopid: shopID,
						promotionid: promotionID,
						voucher_code: voucherCode,
						applied_voucher_code: voucherCode,
						invalid_message_code: 0,
						reward_type: 0,
						shipping_order_distributions: [
							{
								shipping_id: 1,
								discount_value: discountValue * 100000,
								coin_earned: 0,
							},
						],
					},
				],
			};
			const startTime = new Date(voucher.start_time - 1000);
			const hour = startTime.getHours();
			const minute = startTime.getMinutes();
			const second = startTime.getSeconds();
			const job = new CronJob(
				`${second} ${minute} ${hour} * * *`,
				function () {
					sleep(625).then(() => {
						placeOrder(Date.now(), promotionData, discountValue);
					});
					job.stop();
				},
				null,
				false,
				"Asia/Ho_Chi_Minh"
			);
			job.start();
		})
		.catch((error) => {
			console.log(error);
		});
}

saveAndGetVoucherData(voucherCode);

function sleep(time) {
	return new Promise((resolve) => setTimeout(resolve, time));
}
