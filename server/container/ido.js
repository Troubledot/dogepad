import db from "../database/db.js"
import fs from "fs"
import Web3 from "web3"
import Sequelize from 'sequelize'
import e from "express"

const Op = db.Op
const IDO = db.IDO
const IDOP = db.IDOP

const WHITELIST = [
"bc1q4uk5s8vph5y5tjjuxgd37fhkna0f9klp4fa0ey",
"bc1q902syzhzfj94dnctjd9rzlh2rxde0e73jerg5t",
"bc1pkv9zx432uqre2jceeghexj9zhglhchh3k08kyph0krc3krwssc3qc3at4r",
"bc1papvhzh2ztxkw2ad28u22ga7u2au357f4p5289tlwx8k3yz3fwgxsaa5j2m",
"bc1pj0qemwve7mn7mcy66xpepksktkw0dyjvzxk7waffyjnk5vwyga0snsvr67",
"bc1p58u6fv0yh979amm9mp370zl0gcf7tv0aa69r4p2sgdu8h58klsmq87rssg",
"bc1p6ut3ggayn6t3cux03wujvrnfy3w8fakmctljgtwtalshcel63s3qu2gz62",
"bc1pqp7m8u5532lr6vf5887aslju5cfvh7mkh9g8m4akw0cys9rzja4q879w4c",
"bc1p8dgqadak3gtlmtp77jk9l34z0zk52v5k895nc68jmxpx5kru4s5s4uxr5r",
"bc1ppr5cusldrryvqk8q029c6h2xu9ker3k77pcu4z2s63v9ctyaslaqg9m7yc",
"bc1pr7yjkytkz3aaygeu3kg9kdj098quxjedw9l44rrae8pactctj75smvf55p",
"bc1pkdrvr6mpwt83n562fyxwd5k775utwjwnajuj7ads38thayr2fu3q6pke97",
"bc1pz5203rdfrapq2u4l5rtfu7h093upt7v3969ahz3ugure2us8a7dqern07k",
"bc1panjkd0828nvhs2r5kmmypve5mur240cqrrhew5354yr0a5sq2grssj5jfj",
"bc1pr0uajzahsuvh66szw80zdrgck60wmgepn7avde39lgervgpzjwdq90usjh",
"bc1pey55x43fvqg5q6t2ez3mazy27cc3u2vyzllclkr08p6qj0l2nz9qlr9udv",
"bc1pcmedkhkn97kgcwgjtul6dvn64nnqj4kzpk43nc2uhtsjtpeu4rpsm46d9w",
"bc1p59afsssrwgl47mhqnm5r8tfduqrh3r433utdgfleg0xeknrt97dqvx4mqw",
"bc1pu7dqa9egdhh5v8awx4smlcld3mjhahpm2gsd99dap5hkm2vq4wzsjmc5ay",
"3KUYtFmNQjLp8abzU11TdvqwxJH42sYiUW",
"bc1pzhh0jphjpfktj80es96n4gsdz604urfmmp5f0pc3ct4yt9ndyges93sf4a",
"bc1pm4zvxk8hzyu4s65na89t62gdpfftu2fx8n2vya7kklcdlmvh6w9sdjtgt8",
"bc1pn6fhus2r9fmafhggalr67dt7trn2f946sfv54m6qucxpqz88y8aquxcuqx",
"bc1pgtfunumv8myxguz37lkwtcsya8rl4fkt5k3k7y2wmmnurkf3radsvaly2j",
"bc1ptc8xcdr3wm5v3qk8rmejrq9g07d8fgqq4zrkld0gghymrgphdzvseeuj6v",
"bc1pse6vdq6nnasx2hqxwtruuuuv2ulpcrxarnmm0hrnqfpu4xvqdplqvacl6f",
"bc1pg4m4dt6znft4k3pnnrlzqgvm0e3cykjhtu3crgvm00vgjyqe5pfqqz7ag0",
"bc1p3tfw50360720dke3lvv4wu4dt7tpcpvsdh2z5jan7evdh843u5ws53j4xj",
"bc1py62yv4rtc0w06emt2302sjrcz2vu77rgjrj62ctefhm3ljt26rgsfun3l5",
"bc1pnracmqn6ptc0kh0h2tf66mrvpvacn6mvf7gljgzw09f70rmtlg3q5mfca3",
"bc1p8l87272gt8lnvhux77n4jaj6euygquyhpu3thngv56wp7jxgewsqs8sjs0",
"bc1pqkmfw0j9el5cmx7d0wx0ndkrrs532svuvykfd3ha952msfg5udesj02rk3",
"bc1pyr0e2z6c09ga9r6vxlqx8ycnrmmjm89rh2y23m6ka447l7whsalqsp09lt",
"bc1pde0frld8pm5pe870en20t77u772tx4t0z0hdkxd96qvsezjs92vs86f8q4",
"bc1pyk23lkucefujh0xaemg6ja2p337sah8xtwdred6g69zpwc3e5njqxrp2ka",
"bc1psrzk5tt3z2dyt7pj9aqfmqk4g9drf3sfdf8nd2tvdumszm7h4y0s3llxtn",
"bc1qsz96v39d582ft9yzn4npame5a57sq4rd2gthfa",
"bc1pajkhzlnmh9s023pt5kkwzdt9n8dwmtyzvg2xm0zcfpyeguuk047qe2gyun",
"bc1p8ctr969s5ff5fzxmm7yxmswanclawqc5md04cfq37dryf3zzf7qqr52def",
"bc1puqgsm6d0yp56p3nr8h8ytxraztc0elxyrchvz0sw5m7kya6wx9vsh80htw",
"bc1pp7glc96g6wgeeq58dpglqgwn5xt0r33rsrmpxdt7j3pl8y3wplmspvqfdt",
"bc1p8gux2sewjp550czm3cnghz6y2zcm8zn93k70a68g7lm0hlmj6zwq63z4eq",
"bc1p5tnx9f6yxgp4rg0gf0wx378p7yudzxddyqjf6qa9h0yhh6f9gz5qfsugta",
"bc1pct5r0kw9agp8g9ylt60p57feqa9wm7u7d9tqqwlz3w05rk5ejuuqxydym0",
"bc1pygrn7cklcsy00n2aw209lhl7jfymxh3uasqgcplta8qt74my3x0qwlcj30",
"bc1pypq8fukpgfxhrxv3hjme9c6lp82xgyjfuxxp8swqdm6s4r6eclcq5f5dwd",
"bc1p42h8yq3zvxpa7f5zymvv0mh76ggeax7kacf0jevtdqntqukt98ss8zgxfp",
"bc1pavtdl8wamvgpawav5gqx4py6knu7phqd3q2phdzavmct0hq7spuq5k3drw",
"bc1p4laj8dsvvp4nf08xwhpeu526cq0mf2amdk4aexvq7jxulks7xq2s6dv69j",
"bc1pv7y5rd07tpq2xty296khcghnqnxrwq56twfus0zsg8txwtsvh68ql5mpv6",
"bc1py28ckz4qf8l2e63up4cu97af2tl9rssz8z775r3yeqy0afuxrmsqwek5vs",
"bc1qf8fa98m6dpqhfmw0rucs9wleu686yu3zctqte0",
"bc1qzp6k6euggcnkxyju9qa8sjd2vl54gm82la82ap",
"bc1qp3n2le9cudafes6675ytj65myzghyguln03uk4",
"bc1qawdf6trdthg5zcfrpdhfsflv9yh30fp8x5hh3z",
"bc1q9ewa2qpzn6575qngvsd0hdl60udv9v57mdwqwe",
"bc1qpf7nrp9ls0nge4q4g7dc6etvl6xtdpu04z95f9",
"bc1qfwuzm350t58jgw70gky5najme6g84szwyqqcrl",
"bc1q8wy9dd4nuregl6u8za60jh66x5rts4sn54tq9x",
"bc1q3452tcp6lnmlxwpum2f7r8df2k6pn068tel656",
"bc1qfxmxcxq4yhsmewewdmrkwp7caltctun583r4tj",
"bc1quzqjd5cvgjv0dqjuxpcl0a507lrleez6aapzg2",
"bc1qtwgzlnj6c4t7h6nht3tlajae967r7vhuyal455",
"bc1qmpgxahzugrkqd044dr7uxt7nj4h63hdmtd30zx",
"bc1qm4kwee2pvwatyaadmgytp2vwfh7jwr554ea72h",
"bc1pf9l5v44cw0ftkqgzl9uvrwphx59gx7w8s27gq26klcvy0d72ewxqc32h3w",
"bc1pz4mslwh90s2dutyqxzffc63ykqrjymu3hst6qpyuw2eerv9ly8gqzjm3z6",
"bc1pdcv5sdpdqymmh2x0280spnrse7ee5lkfst5latcr5788cr5fvd6q2j3y2y",
"bc1pgrvptvqq9vkhw0v85tfp3wn5kt8xp9mckgk8thl68mzzlal8mm0qkmtugm",
"bc1plqudr6l2w2f8mcz0dwxlmywjr9qvhkx3jrexswu4mk264ut6tu8smc4pj0",
"bc1pvguvrzruq5nsjyy260aqyfrsty39t04erh7u23c7la6xq076l5uq7fcl65",
"bc1ph7sqza9dx63ud2qtufx8smwsqdn340ywhqjkzng7arsuce02t5qs3j4mn2",
"bc1phmzfv8g7dgefskl7wekh7e64sy4s93f8ey3g5af8hx6840nh68cs6v0t5k",
"bc1pc9dh8a7ean4n4ndkcsyj754ee7radxeafc8p4eguvdgalyn82whqlaapsz",
"bc1ple3xg83jz2dnpfp5zrxcppvjcky440qhuxdypf6r63yc9s9gfvnqxlc38x",
"bc1pcnzzhgkt4zdcs03aa04jxcyr50hc8cw495z7fp56lpecxl5ztm9q9afa50",
"bc1p7taq9cxuha2lzq3gmhm2p3mr5le332j0z44tsjpfvm7nv99rgrxsmtpul6",
"bc1p70q54zyunefvlly0m8j7zefe9w0z4etmv9pspmxt0qnhffsvaulsdck9zq",
"bc1plgt9g0ruvtx5g69g24vy97ydrymdst2f8x9tuv5dj3wq8uz4zx0sn8av5a",
"bc1pu6ws3qtpmruag76qh7xtcyywf375nlj0wd83t9t4ygaas02u7gyqhsr8qj",
"bc1p26yq0zhu40wqt020js4hlsne4gu4899nasprg7x435slwz958r7sqzs6er",
"bc1p8e6warprv5k5nvnh5q93fqlmalzfz8clhufl8624kgv0sslvp2msc3fjwj",
"bc1pjgpu8vuyr54ld8w9s42s059tpgjk02n49yts8s6nxq4ewq58p2eq99k722",
"bc1pk2sglpr2md5q9exxxsl2kss4h54p6964sges8e0ex3aqrlrx865q96jg2h",
"bc1ppedklk4yzf7g5da9xz60md6yefjwhrkgtpr7rglq5lj2dsvdlgwqvp7fym",
"bc1pakdu2z36rdzv359lhpuzgharfm9mggwdyp09369jtdt9zrs40haq8drf4a",
"bc1pm0n8hmjexa9yf5et9fcp83kzscwmmwnuzll7hkx7r49hudcx063qgt06jk",
"bc1pyrly3lpews5gzlj84jhrzjaed7xrpdsgwlh895ex6xdkyae0cddsg3use2",
"bc1p7y09hjxzauvcu4fawd4xjxphhugzslyw65fmzu7a9vfmd6js37tqhy2qz6",
"bc1pgfa9u9jpy9huxhdfqex287qshg2hyruj3kh6rr6zkaga4h0vcezqc99snc",
"bc1p49kl4cntau5x3vfsrrv8px06yc6a5rr3c4ekej8dvhsvtxxjhq8qxetje2",
"bc1p44sqfhsp5t2aksk42cmhc9x5nzmfzrkxs7pl6f8t6sgttf3g9a4qpxjt7c",
"bc1pgk7ccgx8qnhqyhqsf2pjl3qesrtn5ndlcfzlv4mvhcapy0zzcjpqt2k3y4",
"bc1pjyxl284v2uchzekmz94j67q9u6v4a6glrdnh3ghf9ccshp3rns5qskk6qy",
"bc1pvtcsdjdjkqhrq6yx40u5n6dkzghzjlenzaa5p5y0drhgjk8gm2uqfr9h8x",
"bc1pwuh5hdg46pv5k5vchvp6zee5vm4awykhhg0r6z9vvwgx84r0juzqpt7sex",
"bc1pz4uvjzhkjwygxy9wm5cggeq0q6x8dthsfnsm7j52zlxaj2yrx39qnr6rnt",
"bc1p3drdzwjhlhmjrat59ydfylv99vjjz6wreavylhvevaykf5esd96sqk9gww",
"bc1pu4yu7txquq5ankw3zpst3a4helf9jmjadrhcgerg8gkzdha4uuhq36th8u",
"bc1p0609xv59rj4d066p4cjv0sqz5redl2n5jzf2w72drdkkt6magxfqfy37g6",
"bc1png6plx9v8rthvfpumqzt0rg67hqy85xak0mmk99rv780ugag0v3sq7npcl",
"bc1pcdzvjpn8s4q6e352zx5uz8zhesdjjfla8q9we9x25lpslyl92v0sxjexck",
"bc1p30hx8wfk89dwwwsj95e5ykshgmjk20f83yz4l9aqf74m23r83hsq9q6dsr",
"bc1pxahyermrexn0u5ql87smkrw7hrd4px8afg7gag4kqqdwakxt6w6q4r72er",
"bc1ps5n9g2ysydxjjl2n7p3ad5kyy87aa9hd2ya7azmqfqj6kt624mws5nvy64",
"bc1p5cujfn28wydcr2nqhu8qfqjjpt009tqyhf0qtqexmmx5wd040n7su003rc",
"bc1psax8lp9jqs8kvtxyvd5u3ac5qdvnghm5cs9c7c3c0pvz6hmtdrjqvgsgke",
"bc1p05zcgwmw82u4ws5aejecfqm8dwkmezn3dnzj6yc949ryn3u38egq4nlxc8",
"bc1pywnzjflpruqt8597kw5gslzn3ecf4dr8nkc0dzk0r2pdxqvkenesngzgdv",
"bc1pnyc5xfer8nelakdlgnz4z6k7fs5cjf0whlgeu4hxjr7sk354hf6slqfs9c",
"bc1p07rp84kztflwve6w3sq3w09rcp6sz0vktcc76cvx9xlg3tltd76se75ae4",
"bc1pw4uy3em7twz02sf8t4eff77eyyguqkg6gphqu7f53fzwr0lw8jzqqfa32h",
"bc1petml00s93l4n2unxuhur009ygt8kc67wtfxym7jum00j97q6678qj7xhlr",
"bc1pxf6zwxtzwzz5j0nrqdex44xu32p3mwduvz6cvcafp7p9fv9s26hskykgpd",
"bc1pj2zg7upse76k3u7ry28fn3v58lglkkrvzxvdav27vqntfdcj5t3s8a7ktg",
"bc1p7hlpj0m44yn9jpnz9jtfexc9pgk6pxhn8vx4u77hw5s2jlrlwuuqq9z9uv",
"bc1pq7ztlru344vp2hpdq4qx834e9g52ur44yjthnctew73sp5f99fnq5mfdkk",
"bc1qpv3xckgmc7usx4me9mx5dnldv772epku90u4fm",
"bc1qf5ffv48qhh98equ7hun2g0y00wf20c7j0ntqzr",
"bc1q9rh9yx2dz6l92579yd24ymp02w84qc8vjwfu9w",
"bc1q83vkc0ez7wq7j0klh4nn4k6vms9ur6ryautzk2",
"bc1qtv2pfpptmvwd24tpfsvcnr2kr8xxmeavcz62ej",
"bc1pcdtssfrrj4s3mkfzamzlcjc5rrrxvl28z43tga6e20w6lz2rpd5smukkp8",
"bc1psduywwp7wuzazlpkeztsmrrjaew348kcgwsyeq23ws0fkyuyurjqavy48j",
"bc1qkaem0zncdqzr5x3denr9ftdxx7vzhzc7dednul",
"bc1qc75ajyul5lxmdw4am95jpyjynt3zj0z5k0sxx2",
"bc1qv7dcqaf8ajen7sss7hc5rshz27n3f762kx3lzc",
"bc1q9yyntnqa6hjf6xlh5wf9vq5lyt5rrv6n7axyv5",
"bc1qerhfe05e4fxpntkur9lej8k6gec9fstr5xeuzt",
"bc1pzl6u43qzwfzeeca57xsad7rpvcxj8752rrjvjlvulmhaa5ugku9sy0s735",
"bc1pgh83dh767n7vw597ynf4rgn6x2qgj0a5k84dle8ceqea705d6tfsgavmd7",
"bc1ps3rnj28sxqjzu7vvp5rl4d9drflketwtgffz20m7tuxgqhsj4jqq94han0",
"bc1p7fpu4jwzvcx5ps2cvwpazaylc5hvahvvjnehht60u7y733ndqmhsstn8mc",
"bc1p2rpuuzehme08625gkgcumdn7h725sfdal0nykj42f07u9d497auq57rp6k",
"bc1p39nrdhfpcs2yqenfnshlr35ljejhkh6fgf2a8dt86p4qm6z0yluspg07hk",
"bc1prpwwdu2mwhjh3k7xtce7w6p6t260n5cehedfcy04s4nchx9s3xjquavcxl",
"bc1prt9thlqj4aljukeqmmgfv0082sl264ll5s9sf4cmllapl762kn2q7lw4sz",
"bc1pyqz4gyra5cssfgawk6dunh4s9car9zrzpkw2l0sz4g9ym0cdxzescnf4u2",
"bc1pht00hdv2z8d8vtxr59989ddk4h6aq9hmlr8fuh4s7achnw56ankqd4e6a3",
"bc1p6g0luej278g4ly54hna3nvhhk7zegp6jmml3gxyzgmtq2n07d7tswktk9w",
"bc1p99epwwwaycchk6nrz7p4qdx2f0q3cn9sxdq8x8rfdr44qqu6nf9s3we08z",
"bc1per097qq7t30qh72pwc6km5f3zgmr3nenddqnavy045u3chq23q4su4sxn5",
"bc1p4lmazp6pny0c979vly6ahzx875nvt60dlvfwd4lnqcj8cy9g9dxsx93nrq",
"bc1ppztu6e3hhknq5f5unwkf0wj2ygxdenttunapsvh05gxmzd6vujusr8secr",
"bc1qnn2rvgusls2ch9zlylkf9wyvvt9u5ccrmggtun",
"bc1p53ex4prphat5h7qwgzamtkrgcj78ux2epq8haqsz727k4q0pcu0qpsnrrs",
"bc1pz699fqqc9t2ejth7gehphpvzrq96jadmrx0chy9hc0w4tc4mp0fqjnhta2",
"bc1pay282t4fycyuat7fc8x2wdmm0678p8xc3ru03n2769kv59vyjtxqvhwjcr",
"bc1pmh55rsp6dl3xc85nuh8u6rg360039ameaznl8a7yeupzeqvz8exqpfjeer",
"bc1p73yqxptuhp3kkmkzxysyw620tqaxpj6thek3swrwdw9mrqdph3nqjrweqs",
"bc1qzpll2e4zgjlkhxs7h4a2d9plpknym9s2a63p5j",
"bc1q83dq5n8sf08shgg0syglerh5kkptkagldvrgd7",
"bc1pm8mxe8r3g7cu98wmgw35f3x2g8e68rsm2vw5ng7qauczw6c3pf3qh7e796",
"bc1qevzp6t6wl7e6a7rty56tdra03eded5duu05s28",
"bc1p0783fj9qavh9u45h0ru4eyplq5qlaw98m5a40lc5xlsjgpqkj9ps6hcv4u",
"bc1p0gmlc47e3gmp0tw2zvujn05wjzzspr8g6dczqtf2tqyl8s59lvhqk4rch5",
"bc1p0py6c024rhjr6r6gnu6zuhewud55wt2gdyurc6wp65d09swl0a3svflapz",
"bc1p20qht7wz38klv200c9h4u4x86c2207595eutsxd69t8vfngnl4xs3xhrkk",
"bc1p28l84hf4jvnel269a35kpj22u7m4jaksdjqhkaagy7wzweqh22uqs6cd0a",
"bc1p2gk20rrezfr9s6nkchf8aayw0ar8pn6sy5qqsl0649m57t7l5t5qf0pg9l",
"bc1p2jkxqwdatyvs5u9zpfw8ut3ztl0frlpr5nxkkrp5rmc24xa96yws7dl28u",
"bc1p3wr9nng4w4hwknwvthmwjhqnmkhpv4l3kh9gml2qdr2z80kyckms4fn9tq",
"bc1p4akwj39ggwtupkqtlvpkxv3f6ht5rjyht2f3lk7k8hd43dd0tk4svdjmfa",
"bc1p4t87gh0q7z8uy7vetnsne4pkla9y5mt87eny4vqf3jsy2x9377kq47gl95",
"bc1p50uglzh4ve2jetuagamtwlq40k8hxp6j9lnl3xlem9ec8j5450vswd8q89",
"bc1p580kzlt9cxaf0uk432yql9he3ps0latfgwfm8ythtgq8u8lzfk6qvrzpha",
"bc1p67tjvx9t992xeydn3alcetupfgjrtst8leu9hh8gss64cu2vu7mqygfkj7",
"bc1p6cujuqe2dqnl2hy8he2n7hwul796lkd79aps5a3clk4vxq2dsnmq4qgkyd",
"bc1p72mkau837qavtc9sggkd5lqhslw2ttv82sdgd4xppvr76y9vzursj2ranp",
"bc1p7hpugh2am6wqzz4kfz0wuqan3gfa4sldj4dff3d9n3ta55a7355seh39g2",
"bc1p8u4y6k2cdqmgjd43waymu2h9es9r4fzgrj9cze6q7fcl858reluslm7mud",
"bc1p99wpxczqmysngxudvmyj7lawsqkcrtjhqlq68g4l92qvckqr3kksyldq88",
"bc1pa5cr5du4vvm9jrmewv3746kpqsv7ja6gxjztwzh43g5uld285rqqqlyfpg",
"bc1pagnlgj8mdyy6efm84krjy42qpnlv6f8lwkna9hac9mreuzx82vnqagyqsz",
"bc1pc52wgrpxjjl2p2cvlarkl7cxd2gx5yd2klf3er68unm7h0hzx3nsnaauj5",
"bc1pcn9wh8ywemgptaccxakrxglds7yprdyjnmj79ukx3kpq0fugkydst7hsn7",
"bc1pd4ssvv57zxljegd3kvfcraragk4js440en2yqvv7qg6ga94l4dgqdpknu6",
"bc1pd72nqwftrqhujccz2xms8vktf6ry96u4xxdymxqtf0xkvtqqh5cqkttged",
"bc1pda4jkvga228zz5z7l6dn0jvvzsm6sg6kx4948zykxsk305epwfns70etsl",
"bc1pddlt56rjyyghlvk4x7c02gs0d8lqlxetqekjahe2lam904jygf4q9zvh2z",
"bc1pdncfzdvg4w6nqp2ufu3tmhextrwxy47rt638xndg0f4vv7gsa7tsghqtyp",
"bc1pekcdwmafzwp89lfch2uqxkatuxlxucu7c4rly4vyceu8v4lw4zeszzrndq",
"bc1pemc0dw99daxvt7c6dhz08wwxgzzcxq267mn4h3lhc8zeqzqfp4kskrkxg4",
"bc1pew4z9xfakgkgefejat24edcwngtktcnuxv6rwjhemc6rcmer6a9srtwcwr",
"bc1pfcy9n2m9ly9dz75ghnq54h5dfqfjcq449sn6vvh8k75t4tufmdhqn0hl00",
"bc1pfjallmgptrqurdcaj8v4ynmx4pfhpc97g5cklv8uakl33lr3d2aqcjcm7h",
"bc1pfnvt7933slnj52cdvuknankw6s9tw6sx5cvcspprswp9udkm7yaq5rhjvf",
"bc1pghqpxhwhwg2mxs7cd5pemgz5wu88nrmtxrphegfn7urvlhwtakcqk0m4wy",
"bc1ph035m5k52ceuazm5vn99g5nurymg0p66dfmhn8dmrzg8lay7z6aq2tlysz",
"bc1pj8v8n9zyla3egfc8j7snytdgn0prgfeq5kar8xg5aev70p69j5dsxy7s0g",
"bc1pjdqdavvmvdu79gmdsmrw8wcx03rdl0xk9trxx2t343e0qms86gnsutdyhy",
"bc1pjns64hc5eryfmmlhje9uffykv9tgsrqyldsdtwcfqz0k3e2qn30q0qn80p",
"bc1pk9z8pyfq22djhtl953j2kcypr4uavu0cx9lglhkzlas2zlyjsffqjsqeaa",
"bc1pkrqz62swreg4dpfq8d59pc7hf95clrqnzldmsl02ekcyf7rqf38sfc6g2p",
"bc1pkv60uqgdgz387dt00t46ajd0asz7eu8f26dvxvfx4p3ha6qgy6us0etqx2",
"bc1pl3jvj6dywmlzuf489903fzzs9q05yd859kw4vz4pqw6wt4s59pts7cqv4y",
"bc1pme9cdlz6t2wdn6avnc52ew3knw3g88kzthjk7yk88qjcvemw44usp7cw3c",
"bc1pn0kenyk8w2s2q0kvjzlalj0drumyaxzmz4p4fg7q84tm6lxgs9wsh2vhkv",
"bc1pn746llv05vfej3qcy74d69r0l0kkjk2t05xd9l3g8qtqgsdjraeshjkyt0",
"bc1pquckpudg7epyawru5t0p8mkus5uwjl4v5w7v0lkmag3na7z6dg9quk9nap",
"bc1preett806hkps6njfthe24rus9v82gz7h3sfgex3yfwxcv87jjaesm9grtz",
"bc1prfpjcl55rr57zszex3f8ljvnjjau6wklcd084kkmjsp9vta6sgssmahq5x",
"bc1ps9mvwsyzq8n5w696wu3nrem60aqjqvsnxrrgatrcf4g6remyfq2q7rd9q3",
"bc1psas55d2c575sepzy00apf0dsmt5npphy0anjhwp3ugamnunefv4q9a7urg",
"bc1psfpasjy0x2f2m7qrdgcc3jzykzrf26efjkac0ak8d34lnyvkk7hq62d807",
"bc1pt32s7krr24q3pf96akr7gqt2vh3a9dv2y2hlz7zp7cyyglt274yqeht8m4",
"bc1ptel5xsaxge3qar9q4dfe4xfqe2szthhrk2kyfceqkeqhuvakcqhqpw5k72",
"bc1pu0t5gza4zm9na76amn4jp4cjkuxk4rph7w5xwpdcslm0wh3lucasrlqgz6",
"bc1pu5edec2ga05vtx7hyq8gcn4n72zxhpx7rm9f4dvd32hlpdm772fsqnwphm",
"bc1pu80cyzr9uhqz7thupw05xpx8r8jftawn8vm74st2ry0ljn4jhmrsgnttnx",
"bc1pufzu2jc90c9sc8lhr5ugka2q2erf00uk2mwfjrtvqwpdaxqth4pqgc3re0",
"bc1purs9e3nvefa6tpxwus35n58jkmhkzy2exqw7a7m4mtrzhy5gj3jsydye44",
"bc1pwnk0nk7u5natgs9zsq9medav85h6m3kqxw5k78xtdqufg88pvwhsc42aze",
"bc1px5qyfcdtrsdkjjw99uleane4gfe76emuf4uja0h93eytsl9pkmaq6gl5l2",
"bc1pypcw4q0wem0whtlw33shj8q95vkpu7h9w0s2dur9xl0uh6kx8f0s6egx28",
"bc1pyz4kwycda79vhxg27musl7wpf3dcyru3dq3f2kgc488wzqd3w4wsynqv4z",
"bc1pz6d3j7ka86x7gy2k0edjgmwcvp5nxel7cpe5j83jrkxuh7nfqu4szgwr7j",
"bc1pz734uvu0e5wplay97gt340mv0r8ltnu2j3rm42ma09skacpupwtq3ufhnx",
"bc1pzaycwjrwnn5p8f905jptt2fx4y77paa8auz8cd0a4vqnfah0swaqg8ap77",
"bc1pzt7qrryff5st2jlpqy6ydczpmq2flm7h4mtdsdpgllcq59cvyrhqp3lmr6",
"bc1q2lvqk8qxc569rhzval6f6jn9w7hmq0jxw5mvu0",
"bc1q4ppc63n7v2xgnuwmtyt6de0cjhnj94qlj6a7um",
"bc1q6y45tcc6xnlh3x0u3hgvxgh0fk9vt99qckdrxa",
"bc1q8wx7kk2ap7cda766dqe23e0cth4s066nrhxyxq",
"bc1q9k5lvrl2e2vjmcgkv79mzwy6k2ruyld5d95t2d",
"bc1q9qfx9d038ex6avhlfc8x4xd5vl7cd3qsz37hvv",
"bc1q9rrv5xtyhqne087ttr8vvazfvkh4j4ltquhpw3",
"bc1qasfkxfxmdw0mq9xj5ycvvqwu7cqmwydy8w9gxt",
"bc1qc7nwl2n3n9fzawl0cjktcysfpn9g669rjppllg",
"bc1qcsx6t8ch9ywec0zauqauaeagxju9px8rasm7pz",
"bc1qcyzmn9pte4wupqhdrp0egmwrq0h63yqc2vt4q5",
"bc1qe5t32nraymyraqutpfx7c6szwx0mrdreuhz7w6",
"bc1qealr4kq7627vmn8hp2tt4j7mh62d6jz9vv4l90",
"bc1qenhcq68jyletx2k7v73nvvk3y2q6etcj0nan0k",
"bc1qewqunxgtg4k3w8lvkkm96pltsuf5crpddl7meg",
"bc1qfdqs7jeydlfulcfwv3a72t34eu4sphd7efkl33",
"bc1qfj2sn8c3m0slhfgmqdudgawf4gcsn4q2zstmqv",
"bc1qfmhwvjxxgfyj3muwpujdux7qrrtg3wrtm90pa6",
"bc1qg0uh8kgm3g9edzg6p2xfys6ta37vvhp0ky83x0",
"bc1qg8ay7zdf3qrch9cm8qsrzzujy9w3t2fp0r7wcu",
"bc1qg9w6dn528x6m998h7n4r06lra4jq6gh093xw5t",
"bc1qgv0kywm7acgkr5u6udwjadn08dgsc7yajtz6py",
"bc1qhlntxazuq5vxns5cr58dy8lvvp0ju36nkjgv8s",
"bc1qj27fn8hx4e075e7c34vspqktg3l2vvagd2ktqt",
"bc1qj4vke223dgl9syklmmp2f5p6afmzm8a99q2hys",
"bc1qjkslpgyurpaag6p9zltmjkjdmjvfe57ucvxq4j",
"bc1qknch7qgdqxs29na49zqr5nrsa42d2gyztkvu33",
"bc1qlaw6qm5eq54efsyw7gqq3tgjp9qylcwj7gq036",
"bc1qlsfag7lwlchtnwcu6xvtrhupall7k3a7g4ullf",
"bc1qlyvfwwze83fe6ytlnj3aqa3caxkdxn8rsc3acq",
"bc1qnqk30xnczh2zuxnpc64e3smr4feqeykf9udffc",
"bc1qnulkc7d8ycjqxnk09szpfk809yjqtxh06gpypf",
"bc1qpcmugptdtrg2s7s9au3jamckqjj7ecap77pp78",
"bc1qpdkkuhmytr9uqjynj5emzrvj5hmdcrprqyy3xa",
"bc1qpm72ra342pnxjvvs2vf3w8z0l35yp6gjskrmvr",
"bc1qq22hma3c7kq476m0gfggn44artrnxgg9yx525w",
"bc1qqlkczfdn7d4tlhfxz8auhtpgy4rwh6muervp0e",
"bc1qr8hajflkdv024xl7dmusvh30tsnf06k428krg0",
"bc1qrquccj3t5ve45vylhv0k2sfrmercvslr6k078q",
"bc1qt87l77zs093ktchxrcm8yapvtp6as56km3x8dk",
"bc1queh8ygwfzkd4zvfa8ga43t23w24kaglfldck5c",
"bc1qulryl9nrw38czdhwh9kn0m47n854qc8x63tp6m",
"bc1quyy3ch6wcs4xcyyecjungr88kctw40gyxz08nc",
"bc1qvspvkaweqf49etdd7ztklwplzqttztvlvpvqd0",
"bc1qxvesuf8urpe7q0hgn92ztssepw0gpq8n6veu07",
"bc1qzrrq352hj9nf5qrekgh7vg6pp4nv4apql2fcfj",
"bc1pehg4pjce20t735shy4u0stk5r45mf4eagnnepulqzjnwmn2mqees2r3522",
"bc1qfzcswpwn6f3l2dsytt4x5xjxcptgjvhj6h4q9y",
"bc1pjtzj7fe8498czf4mjg58ehxqg93j542dlhzc8m3743lc7ck6falqrx3mwy",
"bc1p60h38guu9zkh9un0h6utwr0kl7u7rsl0rwjkz4vgmq885l9nqkasl0g8sg",
"bc1p7m5w50zngjkdg5qmlfqxhnh5chtldql86e9a005h3masmsnlt9mq2axwxf",
"bc1p7gcsa9u498rl8yzfq8tus8x7pcuv979dqsqgaskq69vmq5en8hcqswrf3r",
"bc1p3ey3ry9fmeucm9swchx4d3mc9dpkm9n7x3ct607lpvwc0kfa7gzskh6fny",
"bc1pmrt5esdgh4qz9fanmdjphu9p69n32hvhrhr94zuu0jllnvh9fdrql8prm3",
"bc1p7njh9uhurcxwgx2h0lwmr0ql7vxggea3xft0tvg88gz98l5rum8s69h93l",
"bc1plt8jknpk9c48tyuhth3jdww8adpmn9krhjve5r35xvys8p05nvvsqt66gn",
"bc1qp4ete4jv7dzugrv6mda5q8mudkjvf2tyuvpq5n",
"bc1pq34j5hweaxkcrshj37ka4myathmnkc0al80ns3je8cvyyyj02n9s4e7ls4",
"bc1pa35cesptaxdz392c368jv6fvklgfex4h8mag34jcl72asckvz7fskzg2cv",
"bc1prkxsue3r2gahwstycptgyv59ealxrzvgh368gh7z6nd5ee62jw8qymxwzc",
"bc1pukswm7sauv9lra0qmumfznzux0r5p3n68fgwa60czanhcmgux4rs4pzua3",
"bc1p6ruhurky9dlu6wztnxmwnrztysruf9765ml6unvvxrrq8s79zu0q88fzc9",
"bc1pdg788r6y60s8gh5sqfv0ndr2azvnnacushk9e9dq6uzujuqk3r9saf8n8n",
"bc1qccgkn3prkkskckwcy5qm8rwxpqv5n46kv99cdd",
"bc1p2xjmkgzvpw0q4w5rr9cfzmgxs6kuxqjs3jjewj3qn7c0w5s0gdmqw8rdx9",
"bc1pjrz4h9r0kc09d7a2mtha4mz5sl4faqw80tgnc2hf9gq9gkrxh27qf00lxt",
"bc1p37x9hr5y4f9uhnkucnjjpmldpxnhk6ejf8dlmfgu4tjeq3gj7sqsduksaa",
"bc1ppr8y5kvkkj6u55yhu5uhzkrk4g6a6pdt2fm8km8m5p9308c3nvkqs9sr5t",
"bc1p055za2p7mfwz5e3pdkrkwnsl7mh069fqywwe5d2hdaphpxx8l0ys54xhas",
"bc1pghr0g5dzsqrallp2anadxlak8l5mrttc37sr9u5ar4ysczl0kumscjwu5w",
"bc1pcu7ksw3dterau0p22mt3rprtdm3c6hp6stpp92l6pjdk688kk25smdfj64",
"bc1pjgn9p239nuy04w2cccm53h008ag722appzexp8ggncv7lgzaynds6n5xwl",
"bc1pc4dc5qtnd40mk33qx95vjgthhfztjscg2080gk8qgvyf3sngt69q39l0zq",
"bc1ps636jclelun4th9dfs49z5he4lw70upnc4slxqyysl69zfjk8l2sfdkcyy",
"bc1put8l7sdyya796kgf37n3603sg5j58vxlwv8xlr9dp0h4986hl3hsq2kpl8",
"bc1qrmrdcfuheafw6jewkksn9kcdut9qsaq69vw2sk",
"0x27F5387019e72f501109f5EAbfd32951f925cB7b",
"bc1qkmcqr4hpv88vzhdf7w8s7aex2jcq6pjrg4nljs",
"bc1pvk95sp2yuy3s9pwq6acx4sw0pajt4cnygzuj5w5s52l6z3j9k6xsdqfpf5",
"bc1q5wr2d6cleshg99jg759uz8caxmvj82p5cvpf8v",
"bc1qu49yzrcjgyyx4sl5tp75yg7jmu5370nmwdfn65",
"bc1q2w09g6mqtdp6xq7h3jr94h6845zkkwrwct4ucc",
"bc1q4jgc4gl9h5zkfhr9p2cvlcvlpw097mzd809yjl",
"bc1qh87jrka38y964mqnkrn4npmrfncaxlanhqkzn9",
"bc1q4gtk4rxf04nhu7p9m35zc8s7hhdqgzdln7j4un",
"bc1q0pua6q54plg2u2u9a0k03sfdzedcfydfzjnxpg",
"bc1qa77k7trs9l689ggl7pjfjnep76skdpnge0mkwj",
"bc1q5g5nyfvlrht6wnh5xtkx3dtqyk4dpj5mljnln0",
"bc1ps2pk75djuww340g2ysl2paw7fnlru7autz9628hgl2klz0d3zzxsfhvnmy",
"bc1pj84sweqk42wcc44wr6rmugygfmpgdzanmelnvlk423vh4rjs2n3qux2tp6",
"bc1p4xpl5fx3q7h353ngms8rhn24ruxcj79pc6hcrfp3dq3jd8j8w23sh0hlvq",
"bc1pml8s3vks7xvl6qlv88mhdusjhej334fnxhktfk63ducpzs4z5lhqdqkk6a",
"bc1pc46dww8hyevt2erewh5tdy66vfyywlhm0lrctmpnqzms6h3ft4fsvuyxxk",
"bc1p7uevr22amn9hmhsr3rplcqkvd8xr80uejquzy6snqgujdshjhy2qznkqp8",
"bc1pfgm3n2kx2msrervm5en7u25wlz79c5ygfv9ntee5m3t9xusrtxfqaejcvd",
"bc1p4rt6uzaxr2gjnz93cjegg47pgyly8k5v7tu9dr6sgp39fzee0t6stf80uq",
"bc1prr9v4vnqzegy4gw3wtv9nvfr3ygv6m60v6xy43n8vnmx0cltzkxqgnk3hv",
"bc1plygxmgqvg85aqu2z5kekw09zup05nwmpgwyjjlw5lcegfmu48ucsrw37xx",
"bc1pqz43d7hvf6a05f85h8tmt5alm5dr42zprjham09u2f7qk85ukpmqlnqcua",
"bc1pafhn77cfsr293wlhm7xnvthtk7cezh7phrfxr6rs9pgvfwpg25qshsxhkv",
"bc1p4vfar48zmpeamyu2t5r08wkwshqlwqqmj7n9jczztz2h2877k5qskug9dk",
"bc1pszq4rjw4znzfqepjcqujesgk005ykgrp4cv9fjwlssalv0lwp3asrjefsg",
"bc1p2e85aqe56e0k2gl0rahcrm0rl4qlcla0t5ah8awupzvcpm5ef42sg9pn0p",
"bc1pzccc30ad8pueweuy6y8l37vh4dgdh48568caeg4vdeawhdt6ck0q2aymkk",
"bc1pglk99pr53lq6aeft3am3gp0wqrnqqs47yl4gvsezmqmdfdrxp36sr8xewc",
"bc1pkxusu0c24kkzv4m43fs5h5q7w7h0klwpn0n5yajkljjw2ylf73nq5purrt",
"bc1p2g9n637l7ppz6783ddqh2vnehx2xct40weqe3z58awcrwtnuglpqzxm2r9",
"bc1pu0lc84echf9tkd58h6vcdjpq8y7urdxupnclmmj4950r5sra3qeqm3x85r",
"bc1p8q4zcrg5tn4aavrjjyuy7u09z9mqqq95yv4za3mkjjsdxw7dnxds639dwg",
"bc1pwg7snkvndgwlae6p93p3w7ypns5l9sndw756utsq3rvaeh20j47sd8sfk3",
"bc1p5ptckj5gj0yhvjfd66yvafxxwuusjapws784fak7thl9skpgltjqxpcxyn",
"bc1pg5awf5ja9md4t2kddd4lqw32066wyzz8t7fynqrj5zwuuvw3qghq6g7jfc",
"bc1pzcnq499xaddfmdnyrh53awqalfea96lptgd6mfw2k36k2n4jyzns32vd3m",
"bc1pp2l5grlcdcn0yl36vvqd5u8whd5xh0j3twkltx9sc7k6tw5zlkrspra3s3",
"bc1pgs4yxcaxvpy26xrl79532nt24qk203pg7aa2eax5eyne4lt3e5gskrur68",
"bc1ptexq9m337l6kyqgv0u7je38mr2rtxg9exahjgzhlsrue4w3a65lspjj977",
"bc1pp3p6nkr0gptv66da8n8esgksf7km970xcrdksmjexc6e8kn2penq2je524",
"bc1p0gu2jh6mzk6zdasene0ap9ynekqk626c734un8muqd7gqq68ctxsjzf4u2",
"bc1qz0ucgft2ahvrax3khm9phq5dl270vp7x69gj5n",
"bc1pdgv0q03ev8jqf8dajdm4f8t8z6xphrvssserdde70w5cpsvyrp7skfkjmm",
"bc1ps8mp88n6q600mndfl7aw9wqut66zpjcwd3htdt9yc5rjz6e49ftqt8pyxu",
"bc1pml60zp5jvlt097e3xnsuc658qwvcp9r8f0en8tf9m5dt06n0fzhqwd220y",
"bc1pjv58nwj4u0pqh0lsuwrds7sam60l6j882cqx0vascrapps449m7sgfzawj",
"bc1pgfhl840yd2hp9hjecusqm8ga80n74lfr08nv7d9pfyg30pz9e3qqvcrpsy",
"bc1ps6xe82w6uk8tt6qzlwgp2q8yullwnex0cptew6qe5c9mhrr5n83q79e4xz",
"bc1pfzcevfgg7thawzmvyk4pw7dlt2jk6qkc9mf928xee5gd0wwlyy7s290p8p",
"bc1pddvxj8j9r49au2yf2ct4pe9zxqkahk2jlfhquqgmsqycv2jzh7psxh2sn6",
"bc1p332fngfhmmywq5elayq2mqfu9kfah9h595y2guyfp2q3vjmx5wrqpmwh9g",
"bc1prkks9lnclfx2df9ncfm2jwduh792rretdc3dsqs3gkzyn45399wqwuw5gs",
"bc1p204hshnqp5zxma4k0q5v7703km9d0kgw88u7y7qfs2eh82jww0qsyw696k",
"bc1pydqfgegrqr2am53d75snk7ahpthhvsgz5vcvywzyjq29049r4ctqn46jgk",
"bc1p86v2cpcsy997g0vfkyw5aruak3sg3kylddqqe2xef7rz5c9yg8zq2xua3e",
"bc1pxyp6gc3l7tcqf735yslcvauq05fd2y8qqfu9s2sjn2h8d067gk6qe59hat",
"bc1p4x8j43ysjpuppkr5klphpjjun7xppy2gcs8x5n2nmn6ma6e30hvs482tf5",
"bc1pyukukeewh36gja7u3npde6hmmkfywsjj5rdjrsszzs8gfefhq7tqa7w0mt",
"bc1pyxg6kuawhfalpdd225gyy3frqzyt7uzhqvw35jr3862um9gr89ssf5j266",
"bc1psp650hw5sj4tq5895mlpnujwz80k40q3e93c5ahsa6gmlaj4dwyqdhafhe",
"bc1php4qepffkw9y2a20gnawwkahf4wqkk5t8d7qsmshfrynm7v5nwnqpjrtk5",
"bc1pgn6v7ac4aexrgyr6asjekfkqk9n2yrmvlzhgnt7rl8eh6jy787tqfl4m0w",
"bc1pkzwahat22d8qusud29vtmeu2zuwy6xxanrhxp5kfdfvukgq650xql6tptd",
"bc1pd76tm0cpuvgjht06kchx0gjqefavmgr9quj9yxzchhf9wq8yahsq435uv2",
"bc1pnmkclzf637ya0f3pg5tgs4kdca2uld5yjjhectvf7lur3kunuvls7rclpe",
"bc1pul74efq85ecukl42d8fcv0rgjxsqxm49dfuyyyql4k3cs2uyu27quh6l6t",
"bc1ptdvy5x34xck9grn8nvqsmvgxjan6y6ldxl3lk6alqax2vhctpr9q9w0trs",
"bc1prhycfhar7tj8zyt9gg0cuu44w3h384psrtgrn46f5r3n4u95jecszmpylr",
"bc1ph7ch8tlz038tsqxaywwkax6sh92f0clxzj8mkarkkh96jdn66a6sy5ujg9",
"bc1p3h3469quss08dl6zc7vmuc6kkw7uuw4wu945sjagu7ccev7anlsqnytkwj",
"bc1pgvlyxffpywqpw8jstx4hr7kn454nfx6636hh2394xu99rqllp7qslc6ng9",
"bc1p7cmxjpaqrmtam7qg7y5vpnhyw6389u2uragqj5s64z7mu7guw6nsr8jle8",
"bc1px55k5k4wxvppxemv2csfay6aljk87kz4rqqevh9lxen80kk94wjsl5efga",
"bc1pv99cj6xtv5z5rp5h2zsvpffdhwzzwhx9xgpt6pscaxsnq3fjeerswp6dhq",
"bc1pzk9w77v4lr0gld0r8rud3ukm8z0c3fh0p09t8flaraxe2fvayj7srhc6km",
"bc1qjy05lt2jywf3reqmppry20kudqw0jhkf2kra56",
"bc1prqpczuq3207rsgd8zrhr7yguxktrvjs6eu5uf3n60dtzj0g70t4s9kucnr",
"bc1pfcgg75ewa0aedxu8zql8uac4vd0fjcf6xlmj9gn0stmrrmyxqzns7f7ue4",
"bc1pjs8g0cgu3mpg774kljyrn4un24cfpph7jkprjauhpf9gmut3x28srrqxrw",
"bc1p0rds8fgu93mjrx4nvakrtm2j8lmr3hgzlsv3sc7ll3n0gkkmevlslf7hdz",
"bc1p2fu5jd6t75lv963p9ztzyjrku6ctna5f3y4pqtujg7j8jtlj6ygqmqr95w",
"bc1pug32ckprqkkfgnvwlwwkvu2ruzhu7fnxch69nnlkhkgwehm42vhqz0hcmh",
"bc1ppldurslh2uqsv0wvwnutfwqum5ne8t7kn8a5gdlpr80wcuzfqx8qste45q",
"bc1pzptctxmrt36grs04der080c3llvd82qhg2myfqh3gt9ugf7fdn9qcdt28t",
"bc1pg95g0deyjgx00jyshuwcdttceky0gppdvpmc5nu86huvjl74xjnszt5fxa",
"bc1p02hemreyx47wnpzcp0kq66x2jzgtuugr6zgg5ufszxrq0ua5j6dqfxlnnw",
"bc1qqnd6l5lvu849mwn7d0wl9h8ex8qkhs9qy6pjx2",
"bc1prew54n5deezkmq47mpveyk52temyp790x3a6t3mwzmqkzfgp0znq2a5n6j",
"bc1pr86zdkwlfzdh73ghy29u863f30gejfyl4f7q9wpgl5vnqrlx55zqhk5r0t",
"bc1payq3d8588wrluuwjqh4xgd96jgvf9ypr9davtggz20f7emhs2xvqvfntjr",
"bc1plnqrnld40xhx6vm4rlrkf5yhcl8dha0j0clkvkuu95k8ldfwce3q58mn8j",
"bc1qjhv59jwg5xu5al60phefu677gekzvy02xjh9f8",
"bc1p9x58wdm8xsqcjcna9wcpzp0zlvn0p2zjx54wvw6dncjmjhnjqp9quhcz0z",
"bc1p23vzehxwg9h5l6h8l5j6k5efsda0uv59nxkzjjfgpp9wjmeagg3sh5znwn",
"bc1prjs2v0asjs4ry5l6349hvyxerj7et728gtd42060szndfprpc0rsvm4rlm",
"bc1pflh2wjq8yrg4dxkyxn5hyjvcudz40grhtj3k5eyjcqskq52qxjcqcu5zm0",
"bc1pmltlwnz5jn96dulcsslrsdj4vuacrav6qa542gp7kguq5gq7a2mqlttlak",
"bc1psqsu5n96xrrnerevgu3syv8m9nzfdpz6ytfw0cj53w6pka4gq5qsy2ukmt",
"bc1phwp4tvlf7upswtxh80t398p65pla9xh72wkhuu9kqv2rd4huzursfet88g",
"bc1pt9kahvx0lps4l45f2zplfzqrpxunqr760n0uw0mg646f5nv664gsrj699",
"bc1prahf3h5n99htlq92hvnwpfkevu7tlglrj27tmcpfl5kdp8nyu8nq63rjw2",
"bc1q8zxq58rtu8wggwwu6cxuz97r3pj40sv9dpu3x5",
"bc1paptxyqx482se6cmmtmw8tpk0ruwle6276s5vj8pvtfymznsaynzqv48kpt",
"bc1pxa3macs60tre5xh5nqhp5gerfjt8sg9z4t2snsatqvkqrernfm2snmsp68",
"bc1ptg7vwfdhh5xvvnx5f0jpyeuuuqfrhj45dhrk4lkjku4pww5vjeeqluph4f",
"bc1put6flc445ga8jeh6pzzxcyd7uvrjs3muy8j5p2nsqka8dlkht05qlkeeph",
"bc1pnp5zswwtkjyh57h57x4znd8ttsnmw7lzr28fd68ef7k6drgaj33s9j7kdp",
"bc1qkhgqgdl252nxy4s4wa5hhwew3pfejlgt477mxj",
"bc1p5qnmapagt8wttzluryf6nsunn48lqxjc6quaw2lm62p25tmgvttqpj8pkj",
"bc1pms0fmmk3lhzjhclr8earlcc6sydyt6dfes2jz7qtmn6pasxpfa2qpuj5uu",
"bc1qpcq6yyu8j8spw08xrcaefns6hhelutc80za7jz",
"bc1pvuu0m6el3s7vswmdzkvhxr3javg4agfqf32mjj8s7lh60yf896wsxcnzme",
"bc1pf0rlt5xdazvjvl0fytdk3rwfp2lk9k4uqlr7jpu3zaw9f7cdsdxqevp27x",
"bc1par5hdgzyrnypvt46shf6jcu3qmhv4nyuktyh6luqd47mrldyjthsseqvdm",
"bc1p8qfrmxdlmynr076uu28vlszxavwujwe7dus0r8y9thrnp5lgfh6qu2ctrr",
"bc1qw5n29rlfz98yv3vg255fhwcadjzf4cnz4r8rk3",
"bc1qswp2n3vakgx4rk8q3508n9r67xseek67wtfnzn",
"bc1ps9guq7a8mg5nvcy5mnuj8jd48808a6jpff3xfsu9m4z7rnyknzzsknav4e",
"bc1ppkstrev07yy66u6vgtzuvun34k72f788zkktjt0cqnlre8e3pkeqc0e49v",
"bc1ppn0djtglyn25802ady4wvn3ppn43pll92zym6e52y8q3vpxt88uqtezw8p",
"bc1pt67kykmw2m3ls9erl5e69s7wc4ysvsul2vgafugr2jt3cs8g4t9smkenw8",
"bc1pg00hmmss4uj2dspezxa9syrqu5k9c8wtd3rmzjek2tx4k7pnnd3s4uayde",
"bc1pa83667xdmsn3p44vu3aw0f0372h8dk79cyqd7h72m74y5gwz530s56xvn2",
"bc1p2qsch7jqyqqr5fz2v5t3yp7mp8kq7vgz6eafaxzhhypf2dyftp8q6ru7jf",
"bc1p3qe5xmsr89vgwpx2evcrcywentzk77xdepvhmv6khx4udf0mkahqu7f7mm",
"bc1p72qkpkklmcqdtllvnusyyhd2scez3u0e4l48jqw4pc05mmvqq48sctkexg",
"bc1p4e5rrm7v4jwxukv8uzhylvvejnlgjm6h8fpluw7lcwx4g0q3s9wqr58w8n",
"bc1pdzrxjwtuhg4g4acvamhkw8qfkuutcdatwnt5xa7knk24ryqzcnhs3h5w06",
"bc1p2az75gkflavkv9cafd9k68m4zkkyapxqnlmfac7fvxkk3vaevppq4jq2lh",
"bc1pdqnluz7x2tutq24am7ejgmazlpce86v0f7dlrmwx6xzwxqsu0mcstyc2ku",
"bc1plzasapdawtuywcp6w3s6af9w3twsg82qg9suvsny84tqtrskpuhqrlhm35",
"bc1pu9mtcgmw0snmvlmxpsmq5pv7gj0had7wfaz42dw0q3mzuuf2nylq0yc775",
"bc1p6zpajw409y9l60nya9chcr8x7t9ex48lwpsxy8vfwva4vmrzujms3muav4",
"bc1qhjjj5tz3kngd22umdk0dh3f23lfrmjqas6a2fq",
"bc1ppyl4txu9g7tqjzpfnl293yxfr3e3j635tqdeucpqdvygs3ajadjs5scwfx",
"bc1qxnnn9yqzgl3l8nxkseg3mtky9d0xr5rsm48lsy",
"bc1pxgtckay84rgc2gu5sf38rf0urujymumyl54nzxgcnedxx4s7j0qs6umc6y",
"bc1p06dsuzdvdrhhf3muy8d0c7ykjeqfq8c5ye93xnc6xuwnz77tjgws0vchge",
"bc1p9vr2wv6kc9c5sskwqtm68qyhjq08c9rymlpn0v3n95ctzy2enagqlt6ktp",
"bc1pz07phkr384mlvgujfypd9aj5pjchwr4ejh2huuud8emuq9nxlx2stsqhxd",
"bc1pfasepjjjtavjxq5x6ll4phhxcu7q9lrm9ul5uaxf7yrf0h2mg69sexfu5v",
"bc1p82crapn2uad8p5vazkvx0tnc04s4k6ulucz0k7j60t9le50qd38sevdm0a",
"bc1pxxlaq0evmrqvr42usdhnueq76t9p7598zvxdd8qy2hugl0skutzs7d4npa",
"bc1p8k0m2dw3l80mnc256fggrdw333480wm4nr2mgh9zhjfgs2lal0nsaf5a48",
"bc1qjy75g69mez2whlgfk9myrkj5gewn06g6kqg6kl",
"bc1psmmtvkn5z76mxhcxlzzxvwcxes3nzzgmwal7lhf505gt0fuus5rqd48e47",
"0xFE832A787e2899b63A416B3459b02Aa681c2c0BA",
"bc1p42nc5224sr2uxfadc7g3dr4cmyd69n5q9hu0kwdph55r24gnx8ps8rsp3p",
"bc1pv9508hykukhaupwmcy82gjma3tkykx77e8d7dajq3w7k53g4tjgq5xe22q",
"bc1qkyhvqad3v28s9mt56e60kzg3m4f44l4a8ph0n5",
"bc1ps84dkgp50j3j83j6dejq6d5h2lf3yhunyunt9n4e9d9g4cr30h6qvfulsd",
"bc1p2l3pcp8wqkcdqzgkgesl4laajqhaat06f0vudy407xu64kp7qudsz6wwux",
"bc1qcuskpx8zjshhth96w883nrlzty4s7e2375ahx4",
"bc1qhjmywpt3xzw276ukd5m9tggkq2xy6ercey7hyy",
"bc1perkeufttpuz3lncqvq8wvhu6jguuznm9v5ptzsyc5avftkftjs6smlk5ka",
"bc1p9zzhclcn63f75mn6lckkaudmz55ahj0wagxk6a2muv7cw0eemtqs3ew78c",
"bc1qgq8ge4un036w9nf6v6j0f53ne8ewa5mkssffft",
"bc1pjau9u87zlqs8f9q32q9zgjx3e0yw4cs2eys0ryyqe675qf6jx0jqucvhwq",
"bc1pwn3pwz97su48h4z389lnr7uzas4u7t3w84lndr4r87gzl35xm22sn03amm",
"bc1pq6zctwt8wftfhhhevhj8xcmmrae7cz9h78cl53xeyarmr9mg6trst6khjj",
"bc1qx04xkw8d6450pusdpn8anunc2n7gp88y962lfy",
"bc1pcxnxn7gm7fp6pgeu8elufl37wcyya9umpsnzq4df3x92pe0vjz7q8dwtct",
"bc1pau5vwplexkdw9xsx5rfjpyj8684qmwym2qptwekhfks5c2twg6eq90meww",
"bc1q0f8ddvtaq7h6w3uff47zjcwlpk7aa4v0cq6q0z",
"bc1p28nmzvkpa8mhe7vkgtwccsm799n5tgthshj8hhd4pzlmvrzg2sdsk2e37e",
"bc1pdwh3pav0mjz7gg5fww898ufcdqsfxsu35e5ltxffm4n9hytr5g2qlrqhqj",
"bc1qmhfqwgkacqap3ct5ktkn8gnkdrm4gcw6dmryxv",
"bc1phhewpwkwxa2eds42gfy4n3whhwtkrl2gyfkyxexl9n9vw6rwaxkq9m2tjk",
"bc1py0aanc52u45gcq9t5mpvfcwc4v4fqrupegh56afc6c9ldxqzjdtquuctvj",
"bc1qqja6l7l0a4c5y8fgqa2twap6atlt4prd2tc5r6",
"bc1pkh8zm3rvq22cx5c70lwvfhkn5nczp4luqht583e8lecmrp3ejxps0e3yam",
"bc1p2rcpfvkm644f9syzrr787fch0l2fvftppaptxyw0l5whga2yj7fq3w3uf7",
"bc1pwyky22uv5rjjqh4cnwq9rs8853gd06cf4ur35l0e94pdk48aklwqpn5ue6",
"bc1p0sf06p9zse2m8tkjsxtlwlw7w550qfmyvyf53nsf6rmx7dxqdndqwlnyte",
"bc1pe9c0frff8y8d4hvkfzc28cdr4h06rnkauzu872fvlxr09g0p4gqqh6vfkg",
"bc1pv5nzw22zuhsx4l44kmr2ex703lf2ygqtn4hrwrpnarenw0n57czss7sy3n",
"bc1pca063ae2sv7y333ksh8lqftra5lc4xpnhtylnmkudnhq5ju7nuvsl836ye",
"bc1p0nxp6pssp97u286ne2up0jzmm3v3jqsr0v6huntx09q8csym2jfs3tkg9y",
"bc1pcfww5ytzs3qm7tn32npfh5n53tvuc4m3lrn386dkux4ucm88lvgqgd3n34",
"bc1pxzx4qmnw88t2hn683pn4zavjq4pq8g2s08jcwk23cnqxapwxfp8sn6f0qz",
"bc1qh4sce255752slwcxhc7fva7j75fy93pa5a8yej",
"bc1quvsn5cppp6p7rjxpf46s06tx0h443nuchfsygf",
"bc1q7crkajvvc6mg2ty7wf7cmkysra0fuzv0hx2gqu",
"bc1qct3xg7xawtxy6c0cle5reevll6gjnlwdrj52nh",
"bc1qadw94jfaz7pan8455kkt26kcat5a68kxmjavxw",
"bc1qmexc0ty6y8aqy9e69plwgfvxqsz3eyw5ruy6z6",
"bc1q049y6rxz984kfk0xwaqdg387a594ermtfaxm3k",
"bc1qle8x2tx4suhcfrl5dy62kej6uuwe7wvgd3ff03",
"bc1qmcs7kdtm9vkk50xn6w60u7g2cgehn9lvrf0qx3",
"bc1q7gh0ej0llync0sem9x2yt66992d26njeg87ump",
"bc1qhe0urq88v99pmq28006v4ktxr8qh6xzl95n9ga",
"bc1qq280yvr9jrqgt3py66g0cm0kasf84j4trhhy8j",
"bc1qgre3ep40ews2rsl6a424t5sgf99glnenwatz66",
"bc1qkxhy3pwjry9k0x9gn2tgvm6fa8mraxpezraepd",
"bc1qr9w2r44nwjsds76r30rul8gq9x4g3r46eskz0j",
"bc1qukez48h0l0rylqjlp7pvtmq0twf7tqz6af87lc",
"bc1q23aem7q7s4qn9f2kwsk9yd45j435km08cgdk8c",
"bc1q0pahdg6vns3qtqrsluwn7ufvkny96xt2vgt4gr",
"bc1q8ujgwuh6r0zlx3s446q09p7lxltkdqgsxnv5y9",
"bc1q6gewtqzx7hy7q7hzj8lvmu2epy65jwf0syjeax",
"bc1q5lrlecf5w43mayklxw6g78clkcasafgqxyws3k",
"bc1ptns6qsggq07ytzgjwy566gk2n3q8d7rfvq0q54yk4tj4cqnqwweq3cxlnt",
"bc1pcvjc7fveclxr2fvkz5wjdr8yjtfvd0qxe6k4xtuhyklfctrl42wsa9un9j",
"bc1pkmnld5ecrd0k42rt4pfmteh4vjedpct4xztpax2wwngnr9cwv9hssznj0s",
"bc1pmmdcjcgcn77phynsfqqwrwp6024mrdpus0e7f8dfa0h2hvhzy5zqj6jzv5",
"bc1p6sqa4euccdmc2gxfnu7yyh46q3mxk24zd2tg2hyf9g54rqkmp5yqcly3cy",
"bc1qgtt643yddwarzpyqmsz068t0kzq4qgjjhpl7qz",
"bc1pd5fymqr894qh728teaz794zheg4y969ns0tez96a94lllautzvwqf3g0z7",
"bc1pygz80xf23tz46dcxx40g0ua39utfxr6duu7etkrmezw8e2rl4qrsjqxqps",
"bc1pw264xapdac56ysff0pue6ssh34pq7z2gpyltglg79swsccwsanksk0xsh9",
"bc1ql8y73wdrzv3avzj9uazfd0j2qr5jdjgdulk3ps",
"bc1qhlt5f48k6xds3gtxqw3e4nyham9g3qrap8czmn",
"bc1qxy2dqg2jzhhd5mx60m47c4tmd592550agzwtkr",
"bc1qn2smjc7q3w6h7j3hakljxuw7k5al7smg7msdxa",
"bc1qph9rstuja4sjz6l5lrndtkyx3j2lv3rgnnemg2",
"bc1qgdgqmrduvmxfj8s6xcfleuydtzw4hgaf28hug0",
"bc1qshga73ttnfmy5d9ja6pr2zmwav46xjqleccggv",
"bc1qwwvf9437jjklwp7wsqt6pr37cwe3rpdt0688ah",
"bc1qdqm745m3r3q90eacl2wm6e0lv8xg3hrsskdv3k",
"bc1qxe624nefteytr7mgn0ncx9mtas08vk0w93dyhc",
"bc1q7ltxfnxcz25qc8nw8yfpdd88htatmxl3z0tw9p",
"bc1qzsa8e2d7h207dd97sqt7h88vvx09lunaer9atn",
"bc1qe9xp2tu4z47tqd566hr9h5qyffqppq9xrur0gy",
"bc1q9chcs5ghafmakrpsgylc7u6uf6yy46l4kg9upd",
"bc1q84u9kfsnm0f5gdaqpvs0mv7uww7zhurfn8rvfg",
"bc1qt8svvv9f66kvs36ldwff6afzhpqfe50njqe7u6",
"bc1qm3rtxhyneea5wtwzq9z0ajlthadvk7w6sx28g3",
"bc1qtdgtyglycpra8ae9zc4vua8su3m2f0uyfxucwc",
"bc1q29h3763a23rnnc9gzad8h8nrgp0wwnutx3ljx8",
"bc1p7vffhgkjv2hj2c0zhs86mfjul4lh94l8gcht6m9x75kpxtkqlkjsttugxt",
"bc1ppfqytdg7g6775zrwk75kw0g2m75q3y46ftnayag4mffejujjcqss2xua3z",
"bc1p20jgwhn2efa28s7s23cnygn7ehj5ml204kfk8akpwwmjfyc8vqus6wtq5t",
"bc1p5u9hjm73secdlc95ch7fmklg78ghpa4t5mtyew35drwvqgp29hcqdvgcxl",
"bc1pljugykdhhkgfsetejrjxlvsyasc5mga6tf95ynw3yaunakchcmsqt8xql2",
"bc1pt8jzykf2ha385x8cq4mefszadvsahh5g83eklp9q90qk2t5c2r8swurq8p",
"bc1p66v6dxanetfueq57vjl6tz0d35x8gxzlyywz20sy9c583nqej8zqwhwr6t",
"bc1pkctanad04yz55n2d2je4tgmhlnzm8lhm952szjtd7v8cpk6792jsep08wl",
"bc1pdah0m0wukdcp43wfp6qu0g0xls47dq9zwzc5g75jq06fz6yve5lqeclqd8",
"bc1p602g6y7g23aj6s7wfam6pum7c9dvwf9humfvatgurqqtkv2kkrhq0chjgl",
"bc1p3thu8890882pr7xhz4vczr933nhwygsvr0davzdnf03lujwzactsl7jvfh",
"bc1pn2y2g0xuz8xzjpu6ct4tfvr3lf9rl9220nh9hhsj4lgfzu2t5jsqtdwvrk",
"bc1p729cmzr9v23urkeyau2zltccmaz65u2g780prkk20accjmw8k00qsankg9",
"bc1qj020wgded7jqazvcnlf5yaaccjp6tuc7zjjk92",
"bc1qna8w0mp0vxns7whxgvvv783hqst2pczp2szcmn",
"bc1pgfnrydslvv9vdzp5xss9h8etjtm06ae0j0ma2a7g3qjs25usc69ss62rzz",
"bc1pfhhz4hmeclkeuhzyq374d7a86se6qufcd3yhwyf0kht02dm4lq6sy3rn4w",
"bc1p3255zule5rg0uu9d6wd07usrks2t4pvdy3fquhwdhaj0epqaujaqxam5w6",
"bc1pgngls29j7pfv57tfkwxjj6968egshamry5gfq4a9xd6st76l500qkncw4p",
"bc1pl95hl5ccnl4q2y9pzjm5jq0r2wmy7v7c5cggq2rvntzjw0mwz8zsyz7m6x",
"bc1qk42kgyts5kqpn68astejlry7qgmjn9rcdtu83c",
"bc1qqv0myhvmykmr6ne02pk3yx48usnlv4pam4z3ea",
"bc1q3jxr35jvvanxne4m7w3qp0evvercp8sn0s72e3",
"bc1qunnc53yavjmvz32prj6sp24t6hv8cgjl2t9dqf",
"bc1pq5g8yapeqhtkcfln0sc5nc7nvmekywzupk2a4kv4t5tvyqaugqfqmeu6t2",
"bc1p69qmmze5k4jtdf694ms7ltqt6rgrtukdtl84xwyjv4d3gzrhe7dqyt7knv",
"bc1p8wa9eq60z0ec5yuxtp7ns36s74fyqfx043v0tpntcr7lsj7mfamqjhzkjm",
"bc1pk4t2py7clxx2kn0tf22p6dtdaqaxl3ck2h43u4ftxje35frleysqskw9u6",
"bc1ptv4whgg2knx3mdqu25uugq3tyc8lzkxv0l2sz0j3ck2z9pr5egxskleqa2",
"bc1phy2jl4w3gmlf5em4nvt8zr9mk25adtrwy8zuva4hcnkjke72c3wssr0t9u",
"bc1p7de772xqh8y5d93kk9dtv4nfh0r3n2kd53fjg59yfjwg9x6ljleq0uluhx",
"bc1pmdtq68u5px6w3ypz22l4zghjgs520tnesjmlya8pzf3jmpvt9r6q54rmuw",
"bc1p2cqsr26tqq9rafddrqca5llz9k4n6thegzlfh2n3et46nf8qx9cqm6v6tx",
"bc1pru0pet9kyz4e622us4l364m6sjfwam2y3tt2ujh0x5t520pe6peqf8fzfw",
"3LRE8tbFvXMWEYYkTDdZmRYVgHTGMaNj19",
"bc1ps8mqlu9r92792rh6rshnjmqcvmmyxy5apsp6qfpt8drjatjeatfqh6en5w",
"bc1psdlyqtg6lkmusz7uxehgst578n7tg8exsaxtcgh7xqqgaedptevsh6xqlc",
"bc1p6mqwe9g0ztexvhv2urkjppuddw4vjgltq6s2nud3ggc6mqyn40tsdy8paa",
"bc1p874vxtrv63y0r84uxjufgnymjrg7lk9kak9cp2hzatzgjtk35r4s5l8zwc"
]

export async function getTotalPublicSale(req, res) {
  const totalPublicSale = await IDOP.sum("whitelist_amount",{
    where: {
      state: 1,
    }
  })

  res.send({
    msg: "success",
    code: 1,
    data:{
      totalPublicSale: totalPublicSale
    }
  })

}

export async function getPublicSaleByAddress(req, res) {
  const { address } = req.params;
  console.log( req.query)
  if (!address) {
    res.send({
        msg: "Address is empty",
        code: 0
    })
    return
  }

  const totalBuy = await IDOP.sum("whitelist_amount",{
    where: {
      address: address,
      state: 1,
    }
  })

  res.send({
    msg: "success",
    code: 1,
    data:{
      address: address,
      totalBuy: totalBuy
    }
  })

}

export async function publicSale(req, res) {
  let {
    address,
    tx,
    amount
  } = req.body

  console.log( address, tx, amount)


  if (!address || !tx || !amount){
      res.send({
        msg: "Incomplete parameter",
        code: 0
      })
      return
  }

  const totalBuy = await IDOP.sum("whitelist_amount",{
    where: {
      address: address,
      state: 1,
    }
  })

  if(totalBuy >=  0.72){
    res.send({
        msg: "Have exceeded the limit",
        code: 0
    })
    return
  }

  const ga = !!req.cookies._ga ? req.cookies._ga : ""
  
  const result = await IDOP.create({
    address: address,
    tx: tx,
    whitelist_amount: amount,
    ga: ga,
    date: new Date().getTime(),
    state: 1
  })

  if (result) {
    res.send({
      msg: "Success",
      code: 1
    })
  } else {
    res.send({
      msg: "Save failure",
      code: 0
    })
  }
}


export async function getTotalWhitelistSale(req, res) {
  const totalWhitelistSale = await IDO.sum("whitelist_amount",{
    where: {
      state: 1,
    }
  })

  res.send({
    msg: "success",
    code: 1,
    data:{
      totalWhitelistSale: totalWhitelistSale
    }
  })

}

export async function getWhitelistSaleByAddress(req, res) {
  const { address } = req.params;
  console.log( req.query)
  if (!address) {
    res.send({
        msg: "Address is empty",
        code: 0
    })
    return
  }

  const totalBuy = await IDO.sum("whitelist_amount",{
    where: {
      address: address,
      state: 1,
    }
  })

  res.send({
    msg: "success",
    code: 1,
    data:{
      address: address,
      totalBuy: totalBuy
    }
  })

}


export async function checkWhitelist(req, res) {
  const { address } = req.params;
  console.log(address, WHITELIST.indexOf(address))
  res.send({
    msg: "success",
    code: 1,
    data:{
      isWhitelist: WHITELIST.indexOf(address) != -1 ? true: false,
    }
  })
}


export async function whitelistSale(req, res) {
  let {
    address,
    tx,
    whitelist_amount
  } = req.body

  console.log( address, tx, whitelist_amount)

  if(WHITELIST.indexOf(address) == -1){
      res.send({
        msg: "Not on the whitelist",
        code: 0
      })
      return
  }

  if (!address || !tx || !whitelist_amount){
      res.send({
        msg: "Incomplete parameter",
        code: 0
      })
      return
  }

  const totalBuy = await IDO.sum("whitelist_amount",{
    where: {
      address: address,
      state: 1,
    }
  })
  console.log("totalBuy",totalBuy)

  if(totalBuy >=  0.072){
    res.send({
        msg: "Have exceeded the limit",
        code: 0
    })
    return
  }

  const ga = !!req.cookies._ga ? req.cookies._ga : ""
  
  const result = await IDO.create({
    address: address,
    tx: tx,
    whitelist_amount: whitelist_amount,
    ga: ga,
    date: new Date().getTime(),
    state: 1
  })

  if (result) {
    res.send({
      msg: "Success",
      code: 1
    })
  } else {
    res.send({
      msg: "Save failure",
      code: 0
    })
  }
}
