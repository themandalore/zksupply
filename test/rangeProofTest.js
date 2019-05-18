var RPV = artifacts.require("ZkSensors");

// Note: byte arrays representing big numbers should be multiples of 32 bytes
var NUMBER_1 = "0xa0e1e8856e7d8f37a7463b17c21d4b163165407377b6e472de799becdc7a5c2f"
var NUMBER_2 = "0xd69447ef717b0f977c058320609dc13a3625c1bc3aa48a483ba24d26dd1279e1"
var BIG_NUMBER_1 = "0xa9c540f74dead3ab3e63ebb7370168f4bcd4cd0f6d935492ae034fc49a428eb87bb1dc0521015787e650eb9415d19a8055cf4aa94f57d164aaab0825c97ac4b6fb7b1ba0b91264636d75406c794f9e966736cc5aba2911eef58867236ff08af2"
var BIG_NUMBER_2 = "0xdc8315d2d2d6caffcb34c4d0dfb8b2a14356f9b3a069baa5735d295b7431f3744e70f808857d83da88885cf15dd2d5fc1e2d86e3ec1c1c5bd571c662d9e041351efc6aed3b9aa91da8febe1ddf5211dd5ba91ef42d89e6ef31c8ecfa9d1185f8"
var BIG_NUMBER_3 = "0xa978cf64315b2b83390c06ba4f3c99635481bccf4a58d7c4675ba7a7c4fa636d2131239859f6c85c4b83b0018c907fb6636012be71ccb6a08cd34a93ffe33dccfd88c79d038273800dafd271a1aa41c3dc79b01777b4f6f7cd55f2ad9d9d3757"
var SMALL_NUMBER_1 = "0x00000000000000000000000000000000000000000000000000000026dd1279e1"

contract('RangeProofValidator', function(accounts) {
  let rpv;
    beforeEach('Setup contract for each test', async function () {
      rpv = await RPV.new();
    });
  it("should validate a correct proof",async function () {
    var instance;
    const commitment = "0x00000000000000000000000000000000000000000000000000000000000000E0000000000000000000000000000000000000000000000000000000000000016000000000000000000000000000000000000000000000000000000000000001E0000000000000000000000000000000000000000000000000000000000000026000000000000000000000000000000000000000000000000000000000000002E0000000000000000000000000000000000000000000000000000000000000036000000000000000000000000000000000000000000000000000000000000003E005A7479F3C0227BBEFC2E3192838FE3300B1CC4356384837FF05AEF9ADD35E015D9C303215196ADF90A5A7AFCCF7B2DF5E49FED04B4004FEC3975ECAF663D9D765FE9273E9380DFCEABF3E333C629291E4BEA7611C240486888D53E070797A9AF06AF406DA1171AD68F36B5787321F5939F4EA172CCC536477BD3FBE308001F627ABC941A6A55D90D4CC887C48A3858E0C2B4FF9134C82860D112C46FD9DDF342C1A82A611345E2AB46EC2AAEBE838DD40AC52270519127421984E8B4E01AAFB12C3D9C40B4084E943FEC2617AE0C09AF8F60749BE7EB3066964B526A715CE1405069CEFE2AF375BD9AE75C72009A8536885903F25ABA04D73BF8D745DB4EEB106747D8064AB68277396CB5162E766B3C5D2F0DD8576D99DEB4A9A4B6CF075FEFCD4C50B7A940CBBB59AA1172624F3EE76B3FA56CECFA831F0A5FD95A5B85F5ABBD3C2E0278609F7BC13219AE81B93C7DBB48083068CEF40B1D2101B8F06FC47B8638127FEF17F8B3E2124AFD871BDC54314BE7348E8EDD7739FE56332A801AD05E61ED5B453731F0F10FF969D23230EA211D2C2A259BDAB76111CAC73621750F11C15734B33CC20410B41A51A18FE9F1229F1E692123B76049B4429F8FF2B5EB6E091E5835C79007FBCF5C0AB8411AAC52116B3C94E3965CD45B69E2DDA72A8C92F57C63366EEC51EBFD777748D8474894DBBBC215FD71D9CEDD0D80DD5CA1A23274C1564E6F14A28117D3B83F72A72C34403D40E515E8E775CC40ADE4FFFD5614B5318FF6F7D8A4AD5C6723CD6B5EC0DCB3D0498906AE25224301BABE64150C067FFDAA5947551AB0B5DBB4C030BFA2B7E9C2B692994DDF23462C53DB6AABB1409A3D8F2C3A4FC5AF541D16315FF91D7FB1F76AC78B02ABE758C72F01C9C3E2775CE018455174D66C213D70A2C9DE51EFD6E43096F90D7C2B99A7C176DF521041545D630382702097B40C9D322848564E8FB47E3A1F08053ECEDF3663AAD5E515881479829DE668C03A51CD163FB2331289354051D052A72A55BC97C78516463FB373EC7FF89E1FC101A22C7648BEB22ED1B3FFD2972FA10241CA2EE252A130DC7F293166D1B64DA7F038157EEE81F814BCFE8EA2A696C3CFD3B8CD76A1C011C4CE52AE071A6481133D03BF06AC58C39B730D73BB926B655A4370BDE72505D9F26434A52AA99521EB4A0B43B678094D8BA2EFF8F5ABE228C0164AD8C5473B6CB812FC2603DDE21E0ED1FEB9B39E72D09FD1D7E77B0F19A7EB233CB420B353D"
    const proof = "0x00000000000000000000000000000000000000000000000000000000000003E0000000000000000000000000000000000000000000000000000000000000046000000000000000000000000000000000000000000000000000000000000004E00000000000000000000000000000000000000000000000000000000000000560000000000000000000000000000000000000000000000000000000000000058000000000000000000000000000000000000000000000000000000000000005C000000000000000000000000000000000000000000000000000000000000006C000000000000000000000000000000000000000000000000000000000000007C00000000000000000000000000000000000000000000000000000000000000840000000000000000000000000000000000000000000000000000000000000086000000000000000000000000000000000000000000000000000000000000008A000000000000000000000000000000000000000000000000000000000000009A00000000000000000000000000000000000000000000000000000000000000AA00000000000000000000000000000000000000000000000000000000000000AC00000000000000000000000000000000000000000000000000000000000000B000000000000000000000000000000000000000000000000000000000000000C000000000000000000000000000000000000000000000000000000000000000C200000000000000000000000000000000000000000000000000000000000000C600000000000000000000000000000000000000000000000000000000000000D600000000000000000000000000000000000000000000000000000000000000DE00000000000000000000000000000000000000000000000000000000000000E600000000000000000000000000000000000000000000000000000000000000EE00000000000000000000000000000000000000000000000000000000000000F600000000000000000000000000000000000000000000000000000000000000FE00000000000000000000000000000000000000000000000000000000000001060000000000000000000000000000000000000000000000000000000000000108000000000000000000000000000000000000000000000000000000000000010A000000000000000000000000000000000000000000000000000000000000010C000000000000000000000000000000000000000000000000000000000000010E000000000000000000000000000000000000000000000000000000000000011000000000000000000000000000000000000000000000000000000000000001120267D2C54B93155B4BB09B3D9F3484A4A31712A69E2DE15B5FB16E8C5FE19ECBA06F815616BD11422CA529DF07EAD0B69883FDCD37E7DDB1FC059C844C8990DA308844E6C795E1CD1E24E3C1F203BCB333CE51F6183507CBE42D9CE4D586C3984254996FF8BF24EF0A65B57F84337E573C0FEFAA29E16B4671470C4DCA636CDD01EE857B09BF84F73E1A067A22D3EBF857B4C4201169F2D12D7974F052CC34D9585DE55AF4F74E6017DFBC1783F97A2AF16EC94ADF8CEA7D195A02024F08FD3CBAB4E0074E9EF78F3D1CF23EC7019D80B57F29339058914E101F6323EBAA7D19546FDE87188F7E51B51EBAFDFE3AB245B5481739D2C2A08394FE5F509E09D754405CCAC48C9B445E1D3346989945B57029AF550EF1EB36CFDAEF283C2CC8D67FB443B8103CBD17E45BE5A56A0FCA582261EC05D92AA13FB1AEF284B5B112CC1EE4EE055D8270CCD66BCBB958F0D23F701CB2ADAE316A398490942D803D18F73D005270E848327B861E6D94D6ECC6C90F45F5645A2512CB3AB9EEF239C991294729A1C5253716C3C5EB3DDAB731A2DF8B8C0C03BC25EDC2158D43412E2586D36AD00000000000000000000320C846C1705F0EC9302C51B74676BC42FA926D3586318E3C85D6AFA02C8954BA9481BDE1E6AB041A38993481B49190E8D8F1E31B59E00000000000000000000000000000000000000000000000000000002E39820FE4204A47D9D4D8B3A18977A2B869727527A970906AF6AAE36B20EE75A2EACAE51B36A3775565ED23CD55BFC876EB4307A8558B7A834F7EE7E17AB4D9D712EEA090951C163C66566835DD425D6089EC917CE9351B48E6147AED708CA2B4D88B8775A6EA9C931FD417C8ED710EE958180264291EB30D2886780F795D0D26559454F27B759CB6EC5C33B69FC1ECFDFE957EEEAF4F09F31FF138E820406E67180D92E9BA743B2F0FA9799E4526D365F1D02A93FB2A04304EBA94E5F2B2F4C32DBFB07A524CBEE1EB6259F209C935C97FD22381D5A0A8B09ACDE9A4DF53392F942E7C0000000000000F030B628133ED6701C73FFDCFC3EAD7022C96958653E92A174437107AEC7FFA51F86181AED71B5F7FBE1DDC1511064512920FAE8FBD058989885990686F620C5337A339D77A2716CD307D001E34858E791A39E9FA125F605A831DB60C2ADD5805FCFFADFB65FEB8CDFED007AF52B1B804D18BBBB2835C94AC074D4321AF3F90CFBD0D3FAEAF7427F85889734EEF9F39795F90C8C84924A1901A8DF24CA881E0A7D09ADEAE4F6E3C54FD893FCF261FF8073C58874F1E39200130982E053AA42F6D6DF35760DAFA281EDB2E86045C028C297D41F0183237397F29961D5C991D04EDC76F0DD9F673BD6903FB411670A800AF9B4BB0954ECCE29A8F70A9113E3648049FBD931EF1698FF9AC8823B2B62C01B0CDCAC492FCF1008F5D4BD0B493CBCBB4FB77B06F277357495A6A73D1DAC176D6D39CC1A9DF56E3107F5885FD8F932C342669DB98162CB0CAD18E90718DC67EF908EC94121DCA503D1F3F2507D3DC76E0F34E2F557B470A3BC05B6D824E180F2196647928CBA39AD399AB30171180BF40C7FBC71022F1B065F0294B110CF24C58DFFDE53BF48CA90DB2300000000000000000000320899B1634186ED831724A0969C2035A82983FA8AA80795F2601138819AC1EAC5DD963ECEC78FC403C9D6432FBF0D274D2EF5B1898E0000000000000000000000000000000000000000000000000000000E60CCACF622A2C5BEA0CD0D1DFF485188F410CBCDBF2FE5D8B5D6B5D033E6968927EBD8F8D2CC805A04AD80315DCBE287EB2790397368A75A4C1EA4C9038079624D3D221D2C11899ADA6B0CE825622790918AEC4CD5D9497A654FFB7ED258A5F5C49103EB0930EAC2AE9E615A5225B2F67959ED86E6EBF6193176E5D83BF527968458808E313B58A4B603015384024D1553B5D6FB0D0EF937AF1E8C7C71B65AB22BAE083F2968B97EEC5A362C4EAED4C2F6A2DACF41D5445C7FCE4E25931F7C4F787D4D09F836209B7F54764340C06E7A67D74834381CD836D1EF623786D93CFD5EB1D2F600000000000404D092D7FEDC46CE1211F2122921B77CD8A5560BE53BE23D0592DCF6472BDF2C151A433240490ABB3B58462185C9D539D3ED665F713C0B36B56090DBC6371907D747AD4A0D3A4839441B6C6269183AECDF14CAE1E8DD4403423317383BC7D70D6E5A90C2776D7065B01FD221273BAEAED6524CBD0277D07E2CA53AEFF1BD0C380B733B215BB8D4DCE6195BFA49B8759BBDEAEB531000172D7A85C1AB178B560C0C9EBE50193687FED1835D38C1C38D49E3EF1DBA39666A24C65235639163627F19879D077D19C54664979E2FC0A42925FFE70016D4A741831F522D5485F31F3BA045FC9B021870BF512C84A579D19CF6BDA19A0E8C306C2B846E8129D34CD145B9374B49DD10C1A9B60DE17DE229433475A5A519B34323D52BB40000000000000000000000000000000000000000001C3CCCDE975305EE9D0952C235157FADCCCF3F9E42D8B2D6C83F6F044261FBAC61E44191AE50D1DD831C1B06C186729268A8388130ECD0C4B85CC8E4FA563A5F258A98A4D2051818E88725D644045448915D99310A33C253262D17D59792D9A321D5A8497988CB7A120AAA3D121ED0285D3E03E59FAEDB56510DA9082ED294EAE3FCE7E607478B04A21F7CAB36D7719F346D4ED5E791F432C10443AEF8B3A6AAAE58DE82D147E2E3CAFEDAC749F9DC62A47E085ED111E193825294AEFF24F091F7AC399859678F370D5C873EB3CADE09E66F7A69CB12B62792CD7C4EDA5F15C23B39682AF32D87A654284F09AC362138CB3214871120C54AA9E85B53B9B608E5D0C634430721D175EACC6961C4CC18652F42EF1869F51838FE3450D4A06A3CB4204AADB1FA8A79F2516C59EED49DD297F80E21587E0CCB3D4AA7E6AC42D51227312BB91403B2AD8F845A6900000000000000000000000000000000000000000027710D6E5B1711DE9569096CEE1E1C581AC33D15B974892B2B4D1CA48567D799DEA73C4E0C488FD1F9C04C05293EBF702A0A70B865E719EF40A4D8F0A2EFB1132E2A933BEADAFD7603790A4ED4FBF98EFFBFC2234FC29E4EBB974F8157C45EEEA9BB4D6A17EFC036502E038F8B860358CF17EB68D9C34CD6AE1D52260D36DC124C29248F1F9D2284DFC05241329ABE6209D59FC9A5CF732352FF517200817E1EE92D3C73BFEE87E18D06A293377C9F0EE26198A2FB5C37330A8A4F20040C2BF94B49274B0AA5DDEEAD1B44BAF42302A6BC4B2556687096A2C36EF6F98AC1FB2E23B741AA31DE2CBD7B66EFFB4BEBE2B84D3F07C58B19536DC1F229D7BAB3D54E1A8BE541DE00EDFC745BEBD53F41ABC033B3688B83FA7D771E4DA20CCF35C8427F8EAD5AF8AEBC6A1871EF0EB472DC6505AB16A1C4FE1870C32FB4BFF9CB51987074DEF731AF1142653CC06103BFF86373E35B8EC4BAF034718EE1B506F7A01A9C7B20C272F307A016DBBB4E7CF10C79D6FA900D52A3F9F150273B1CDD73CB6603C63259751F4366B9B83CA5B5C7D275B0D58EE6B8F8BF2E9BDFF23A382CDF6E579F0B28909C8EFD3A62FC0F2BBFF04E806D0B9229915A7EC177648DD6699D488575D8D734C5B887EC01227991F61D51EF9B4ACD0C849B0D0B205F385387AA02359EB9D73F2D44985D4F1DA4C40480967AE16D3E246551EC7CCDD1B2CED26C634341DAF8239FD027871A8CEC69766FB38FF9AF6F519E61EEEC4330023D13AE927B759D55E6D2762E41D2BA0E529170FB87CB0CAD465E633942B5C291B8715E2F43EA1F100ADB1D86C8AFC723181290238528E7C914C40B6FD16A8712CD9971EA6B5F6CC5D060098711432FA7AFA87F3200000941611E4A53B29B9C8FC5E256B07431EC6CA3B6B03CD4BC72673C435FC45E8DA2DA688244144673A3E8059123C889625581509382846FC8A7107C52BC64FF65E8F74181168511D12125B3EDFF612AADE9F2A6334D07BD6467A6BB5255D9E115E1DA1A117B06DABB9841A5F41E434A1758952CC1617C0BD403E172F3FE3BA244BB95F95AB8D1F98EBBF480AD028F2878145CAF819E4AF681AF814982338DE86A2D1BAB74C0B1AD6D2058B80415B1341095251FA650B1A3579805549BD3C6C3854848956F6117BF97945AFF2EF053A5972BB10E9CE4CF39164FB99F94B8D953AE901FF656A73794A19BFB163F629AC92483D33CBAE36E06EFEA4DDA75C82913BAF2805DD97953C05C34F13A600C89C486F9B6C2A6185FF9A1B08D2E46F8F04A4D34EC32F3EC0DF0FE7E8A61B41144DC7CBD3D3D26F9C3E90CE40638121FCD6016207DAAA9D1B8E1302DC52966CD849A012457E94E715F508380A9434F19AB31DA0472E8A17B362BAF15759A398B981BAD0A907976038ED3AF932450724B31371D0E40D94BF57BEBE45A1A58DDB720246A492EDB89EE7B72094AC8E3FD1030F0EA5AF8898D8F4CEAE8A4934F3E04F32D7425CD2062A16DD0CA5500000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000100000000000000000000DB6185C1AC9F31F4E3FD28D84BC2C018A1837B788BDD"
    const lower = 18
    const upper = 65
    console.log('Contract Deployed at: ',rpv.address);
    var res = await rpv.validate(lower, upper, commitment, proof);
    assert.equal(res, true)
  })

  /*it("should reject a modified proof", function () {
    var instance;
    const commitment = "0x00000000000000000000000000000000000000000000000000000000000000E0000000000000000000000000000000000000000000000000000000000000016000000000000000000000000000000000000000000000000000000000000001E0000000000000000000000000000000000000000000000000000000000000026000000000000000000000000000000000000000000000000000000000000002E0000000000000000000000000000000000000000000000000000000000000036000000000000000000000000000000000000000000000000000000000000003E005A7479F3C0227BBEFC2E3192838FE3300B1CC4356384837FF05AEF9ADD35E015D9C303215196ADF90A5A7AFCCF7B2DF5E49FED04B4004FEC3975ECAF663D9D765FE9273E9380DFCEABF3E333C629291E4BEA7611C240486888D53E070797A9AF06AF406DA1171AD68F36B5787321F5939F4EA172CCC536477BD3FBE308001F627ABC941A6A55D90D4CC887C48A3858E0C2B4FF9134C82860D112C46FD9DDF342C1A82A611345E2AB46EC2AAEBE838DD40AC52270519127421984E8B4E01AAFB12C3D9C40B4084E943FEC2617AE0C09AF8F60749BE7EB3066964B526A715CE1405069CEFE2AF375BD9AE75C72009A8536885903F25ABA04D73BF8D745DB4EEB106747D8064AB68277396CB5162E766B3C5D2F0DD8576D99DEB4A9A4B6CF075FEFCD4C50B7A940CBBB59AA1172624F3EE76B3FA56CECFA831F0A5FD95A5B85F5ABBD3C2E0278609F7BC13219AE81B93C7DBB48083068CEF40B1D2101B8F06FC47B8638127FEF17F8B3E2124AFD871BDC54314BE7348E8EDD7739FE56332A801AD05E61ED5B453731F0F10FF969D23230EA211D2C2A259BDAB76111CAC73621750F11C15734B33CC20410B41A51A18FE9F1229F1E692123B76049B4429F8FF2B5EB6E091E5835C79007FBCF5C0AB8411AAC52116B3C94E3965CD45B69E2DDA72A8C92F57C63366EEC51EBFD777748D8474894DBBBC215FD71D9CEDD0D80DD5CA1A23274C1564E6F14A28117D3B83F72A72C34403D40E515E8E775CC40ADE4FFFD5614B5318FF6F7D8A4AD5C6723CD6B5EC0DCB3D0498906AE25224301BABE64150C067FFDAA5947551AB0B5DBB4C030BFA2B7E9C2B692994DDF23462C53DB6AABB1409A3D8F2C3A4FC5AF541D16315FF91D7FB1F76AC78B02ABE758C72F01C9C3E2775CE018455174D66C213D70A2C9DE51EFD6E43096F90D7C2B99A7C176DF521041545D630382702097B40C9D322848564E8FB47E3A1F08053ECEDF3663AAD5E515881479829DE668C03A51CD163FB2331289354051D052A72A55BC97C78516463FB373EC7FF89E1FC101A22C7648BEB22ED1B3FFD2972FA10241CA2EE252A130DC7F293166D1B64DA7F038157EEE81F814BCFE8EA2A696C3CFD3B8CD76A1C011C4CE52AE071A6481133D03BF06AC58C39B730D73BB926B655A4370BDE72505D9F26434A52AA99521EB4A0B43B678094D8BA2EFF8F5ABE228C0164AD8C5473B6CB812FC2603DDE21E0ED1FEB9B39E72D09FD1D7E77B0F19A7EB233CB420B353D"
    const proof = "0x00000000000000000000000000000000000000000000000000000000000003E0000000000000000000000000000000000000000000000000000000000000046000000000000000000000000000000000000000000000000000000000000004E00000000000000000000000000000000000000000000000000000000000000560000000000000000000000000000000000000000000000000000000000000058000000000000000000000000000000000000000000000000000000000000005C000000000000000000000000000000000000000000000000000000000000006C000000000000000000000000000000000000000000000000000000000000007C00000000000000000000000000000000000000000000000000000000000000840000000000000000000000000000000000000000000000000000000000000086000000000000000000000000000000000000000000000000000000000000008A000000000000000000000000000000000000000000000000000000000000009A00000000000000000000000000000000000000000000000000000000000000AA00000000000000000000000000000000000000000000000000000000000000AC00000000000000000000000000000000000000000000000000000000000000B000000000000000000000000000000000000000000000000000000000000000C000000000000000000000000000000000000000000000000000000000000000C200000000000000000000000000000000000000000000000000000000000000C600000000000000000000000000000000000000000000000000000000000000D600000000000000000000000000000000000000000000000000000000000000DE00000000000000000000000000000000000000000000000000000000000000E600000000000000000000000000000000000000000000000000000000000000EE00000000000000000000000000000000000000000000000000000000000000F600000000000000000000000000000000000000000000000000000000000000FE00000000000000000000000000000000000000000000000000000000000001060000000000000000000000000000000000000000000000000000000000000108000000000000000000000000000000000000000000000000000000000000010A000000000000000000000000000000000000000000000000000000000000010C000000000000000000000000000000000000000000000000000000000000010E000000000000000000000000000000000000000000000000000000000000011000000000000000000000000000000000000000000000000000000000000001120267D2C54B93155B4BB09B3D9F3484A4A31712A69E2DE15B5FB16E8C5FE19ECBA06F815616BD11422CA529DF07EAD0B69883FDCD37E7DDB1FC059C844C8990DA308844E6C795E1CD1E24E3C1F203BCB333CE51F6183507CBE42D9CE4D586C3984254996FF8BF24EF0A65B57F84337E573C0FEFAA29E16B4671470C4DCA636CDD01EE857B09BF84F73E1A067A22D3EBF857B4C4201169F2D12D7974F052CC34D9585DE55AF4F74E6017DFBC1783F97A2AF16EC94ADF8CEA7D195A02024F08FD3CBAB4E0074E9EF78F3D1CF23EC7019D80B57F29339058914E101F6323EBAA7D19546FDE87188F7E51B51EBAFDFE3AB245B5481739D2C2A08394FE5F509E09D754405CCAC48C9B445E1D3346989945B57029AF550EF1EB36CFDAEF283C2CC8D67FB443B8103CBD17E45BE5A56A0FCA582261EC05D92AA13FB1AEF284B5B112CC1EE4EE055D8270CCD66BCBB958F0D23F701CB2ADAE316A398490942D803D18F73D005270E848327B861E6D94D6ECC6C90F45F5645A2512CB3AB9EEF239C991294729A1C5253716C3C5EB3DDAB731A2DF8B8C0C03BC25EDC2158D43412E2586D36AD00000000000000000000320C846C1705F0EC9302C51B74676BC42FA926D3586318E3C85D6AFA02C8954BA9481BDE1E6AB041A38993481B49190E8D8F1E31B59E00000000000000000000000000000000000000000000000000000002E39820FE4204A47D9D4D8B3A18977A2B869727527A970906AF6AAE36B20EE75A2EACAE51B36A3775565ED23CD55BFC876EB4307A8558B7A834F7EE7E17AB4D9D712EEA090951C163C66566835DD425D6089EC917CE9351B48E6147AED708CA2B4D88B8775A6EA9C931FD417C8ED710EE958180264291EB30D2886780F795D0D26559454F27B759CB6EC5C33B69FC1ECFDFE957EEEAF4F09F31FF138E820406E67180D92E9BA743B2F0FA9799E4526D365F1D02A93FB2A04304EBA94E5F2B2F4C32DBFB07A524CBEE1EB6259F209C935C97FD22381D5A0A8B09ACDE9A4DF53392F942E7C0000000000000F030B628133ED6701C73FFDCFC3EAD7022C96958653E92A174437107AEC7FFA51F86181AED71B5F7FBE1DDC1511064512920FAE8FBD058989885990686F620C5337A339D77A2716CD307D001E34858E791A39E9FA125F605A831DB60C2ADD5805FCFFADFB65FEB8CDFED007AF52B1B804D18BBBB2835C94AC074D4321AF3F90CFBD0D3FAEAF7427F85889734EEF9F39795F90C8C84924A1901A8DF24CA881E0A7D09ADEAE4F6E3C54FD893FCF261FF8073C58874F1E39200130982E053AA42F6D6DF35760DAFA281EDB2E86045C028C297D41F0183237397F29961D5C991D04EDC76F0DD9F673BD6903FB411670A800AF9B4BB0954ECCE29A8F70A9113E3648049FBD931EF1698FF9AC8823B2B62C01B0CDCAC492FCF1008F5D4BD0B493CBCBB4FB77B06F277357495A6A73D1DAC176D6D39CC1A9DF56E3107F5885FD8F932C342669DB98162CB0CAD18E90718DC67EF908EC94121DCA503D1F3F2507D3DC76E0F34E2F557B470A3BC05B6D824E180F2196647928CBA39AD399AB30171180BF40C7FBC71022F1B065F0294B110CF24C58DFFDE53BF48CA90DB2300000000000000000000320899B1634186ED831724A0969C2035A82983FA8AA80795F2601138819AC1EAC5DD963ECEC78FC403C9D6432FBF0D274D2EF5B1898E0000000000000000000000000000000000000000000000000000000E60CCACF622A2C5BEA0CD0D1DFF485188F410CBCDBF2FE5D8B5D6B5D033E6968927EBD8F8D2CC805A04AD80315DCBE287EB2790397368A75A4C1EA4C9038079624D3D221D2C11899ADA6B0CE825622790918AEC4CD5D9497A654FFB7ED258A5F5C49103EB0930EAC2AE9E615A5225B2F67959ED86E6EBF6193176E5D83BF527968458808E313B58A4B603015384024D1553B5D6FB0D0EF937AF1E8C7C71B65AB22BAE083F2968B97EEC5A362C4EAED4C2F6A2DACF41D5445C7FCE4E25931F7C4F787D4D09F836209B7F54764340C06E7A67D74834381CD836D1EF623786D93CFD5EB1D2F600000000000404D092D7FEDC46CE1211F2122921B77CD8A5560BE53BE23D0592DCF6472BDF2C151A433240490ABB3B58462185C9D539D3ED665F713C0B36B56090DBC6371907D747AD4A0D3A4839441B6C6269183AECDF14CAE1E8DD4403423317383BC7D70D6E5A90C2776D7065B01FD221273BAEAED6524CBD0277D07E2CA53AEFF1BD0C380B733B215BB8D4DCE6195BFA49B8759BBDEAEB531000172D7A85C1AB178B560C0C9EBE50193687FED1835D38C1C38D49E3EF1DBA39666A24C65235639163627F19879D077D19C54664979E2FC0A42925FFE70016D4A741831F522D5485F31F3BA045FC9B021870BF512C84A579D19CF6BDA19A0E8C306C2B846E8129D34CD145B9374B49DD10C1A9B60DE17DE229433475A5A519B34323D52BB40000000000000000000000000000000000000000001C3CCCDE975305EE9D0952C235157FADCCCF3F9E42D8B2D6C83F6F044261FBAC61E44191AE50D1DD831C1B06C186729268A8388130ECD0C4B85CC8E4FA563A5F258A98A4D2051818E88725D644045448915D99310A33C253262D17D59792D9A321D5A8497988CB7A120AAA3D121ED0285D3E03E59FAEDB56510DA9082ED294EAE3FCE7E607478B04A21F7CAB36D7719F346D4ED5E791F432C10443AEF8B3A6AAAE58DE82D147E2E3CAFEDAC749F9DC62A47E085ED111E193825294AEFF24F091F7AC399859678F370D5C873EB3CADE09E66F7A69CB12B62792CD7C4EDA5F15C23B39682AF32D87A654284F09AC362138CB3214871120C54AA9E85B53B9B608E5D0C634430721D175EACC6961C4CC18652F42EF1869F51838FE3450D4A06A3CB4204AADB1FA8A79F2516C59EED49DD297F80E21587E0CCB3D4AA7E6AC42D51227312BB91403B2AD8F845A6900000000000000000000000000000000000000000027710D6E5B1711DE9569096CEE1E1C581AC33D15B974892B2B4D1CA48567D799DEA73C4E0C488FD1F9C04C05293EBF702A0A70B865E719EF40A4D8F0A2EFB1132E2A933BEADAFD7603790A4ED4FBF98EFFBFC2234FC29E4EBB974F8157C45EEEA9BB4D6A17EFC036502E038F8B860358CF17EB68D9C34CD6AE1D52260D36DC124C29248F1F9D2284DFC05241329ABE6209D59FC9A5CF732352FF517200817E1EE92D3C73BFEE87E18D06A293377C9F0EE26198A2FB5C37330A8A4F20040C2BF94B49274B0AA5DDEEAD1B44BAF42302A6BC4B2556687096A2C36EF6F98AC1FB2E23B741AA31DE2CBD7B66EFFB4BEBE2B84D3F07C58B19536DC1F229D7BAB3D54E1A8BE541DE00EDFC745BEBD53F41ABC033B3688B83FA7D771E4DA20CCF35C8427F8EAD5AF8AEBC6A1871EF0EB472DC6505AB16A1C4FE1870C32FB4BFF9CB51987074DEF731AF1142653CC06103BFF86373E35B8EC4BAF034718EE1B506F7A01A9C7B20C272F307A016DBBB4E7CF10C79D6FA900D52A3F9F150273B1CDD73CB6603C63259751F4366B9B83CA5B5C7D275B0D58EE6B8F8BF2E9BDFF23A382CDF6E579F0B28909C8EFD3A62FC0F2BBFF04E806D0B9229915A7EC177648DD6699D488575D8D734C5B887EC01227991F61D51EF9B4ACD0C849B0D0B205F385387AA02359EB9D73F2D44985D4F1DA4C40480967AE16D3E246551EC7CCDD1B2CED26C634341DAF8239FD027871A8CEC69766FB38FF9AF6F519E61EEEC4330023D13AE927B759D55E6D2762E41D2BA0E529170FB87CB0CAD465E633942B5C291B8715E2F43EA1F100ADB1D86C8AFC723181290238528E7C914C40B6FD16A8712CD9971EA6B5F6CC5D060098711432FA7AFA87F3200000941611E4A53B29B9C8FC5E256B07431EC6CA3B6B03CD4BC72673C435FC45E8DA2DA688244144673A3E8059123C889625581509382846FC8A7107C52BC64FF65E8F74181168511D12125B3EDFF612AADE9F2A6334D07BD6467A6BB5255D9E115E1DA1A117B06DABB9841A5F41E434A1758952CC1617C0BD403E172F3FE3BA244BB95F95AB8D1F98EBBF480AD028F2878145CAF819E4AF681AF814982338DE86A2D1BAB74C0B1AD6D2058B80415B1341095251FA650B1A3579805549BD3C6C3854848956F6117BF97945AFF2EF053A5972BB10E9CE4CF39164FB99F94B8D953AE901FF656A73794A19BFB163F629AC92483D33CBAE36E06EFEA4DDA75C82913BAF2805DD97953C05C34F13A600C89C486F9B6C2A6185FF9A1B08D2E46F8F04A4D34EC32F3EC0DF0FE7E8A61B41144DC7CBD3D3D26F9C3E90CE40638121FCD6016207DAAA9D1B8E1302DC52966CD849A012457E94E715F508380A9434F19AB31DA0472E8A17B362BAF15759A398B981BAD0A907976038ED3AF932450724B31371D0E40D94BF57BEBE45A1A58DDB720246A492EDB89EE7B72094AC8E3FD1030F0EA5AF8898D8F4CEAE8A4934F3E04F32D7425CD2062A16DD0CA5500000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000100000000000000000000DB6185C1AC9F31F4E3FD28D84BC2C018A1837B788BDD"
    const lower = 18
    const upper = 65

    function modify(str, pos) {
        var newChar = str.charAt(pos) == "0" ? "1" : "0"
        return str.substr(0, pos) + newChar + str.substr(pos + 1);
    }

    // Try some arbitrary small modifications
    return rpv.deployed().then(function(inst) {
      instance = inst;

      return instance.validate.call(lower, upper, commitment, modify(proof, 1489))
    }).then(function(result) {
        assert.equal(result, false)

      return instance.validate.call(lower, upper, commitment, modify(proof, 3792))
    }).then(function(result) {
        assert.equal(result, false)

      return instance.validate.call(lower, upper, commitment, modify(proof, 6284))
    }).then(function(result) {
        assert.equal(result, false)

      return instance.validate.call(lower, upper, commitment, modify(proof, 8274))
    }).then(function(result) {
        assert.equal(result, false)
    })
  })

  it("should convert uint256 to bytes", function() {
    var instance;
    return rpv.deployed().then(function(inst) {
      instance = inst;
      return instance.toBigInt.call(1);
    }).then(function(result) {
      assert.equal(result, "0x0000000000000000000000000000000000000000000000000000000000000001");

      return instance.toBigInt.call(web3.toBigNumber(NUMBER_1))
    }).then(function(result) {
      assert.equal(result, NUMBER_1);
    });
  });

  function testOperation(name, bigNumberFunction, contractFunction) {
    it("should correctly do operation '" + name + "'", function () {
        var instance;
        return rpv.deployed().then(function(inst) {
          instance = inst;
          return contractFunction(instance).call(NUMBER_1, NUMBER_2)
        }).then(function(result) {
          let expectedResult = bigNumberFunction(web3.toBigNumber(NUMBER_1), web3.toBigNumber(NUMBER_2))
          assert.equal(web3.toBigNumber(result).toFixed(), expectedResult.toFixed())

          return contractFunction(instance).call(BIG_NUMBER_1, BIG_NUMBER_2)
        }).then(function(result) {
          let expectedResult = bigNumberFunction(web3.toBigNumber(BIG_NUMBER_1), web3.toBigNumber(BIG_NUMBER_2))
          assert.equal(web3.toBigNumber(result).toFixed(), expectedResult.toFixed())

          return contractFunction(instance).call(SMALL_NUMBER_1, BIG_NUMBER_3)
        }).then(function(result) {
          let expectedResult = bigNumberFunction(web3.toBigNumber(SMALL_NUMBER_1), web3.toBigNumber(BIG_NUMBER_3))
          assert.equal(web3.toBigNumber(result).toFixed(), expectedResult.toFixed())

          return contractFunction(instance).call(BIG_NUMBER_3, SMALL_NUMBER_1)
        }).then(function(result) {
          let expectedResult = bigNumberFunction(web3.toBigNumber(BIG_NUMBER_3), web3.toBigNumber(SMALL_NUMBER_1))
          assert.equal(web3.toBigNumber(result).toFixed(), expectedResult.toFixed())
        })
    })
  };

  testOperation("ADD", (bn1, bn2) => bn1.plus(bn2), (x => x.bigadd))
  testOperation("SUB", (bn1, bn2) => bn1.minus(bn2).abs(), (x => x.bigsub))
  testOperation("MUL", (bn1, bn2) => bn1.mul(bn2), (x => x.multiply))
  testOperation("MOD", (bn1, bn2) => bn1.mod(bn2), (x => x.bmod))

  it("should calculate square of big number", function () {
    var instance;
    return rpv.deployed().then(function(inst) {
      instance = inst;
      return instance.square.call(NUMBER_1)
    }).then(function(result) {
      let expectedResult = web3.toBigNumber(NUMBER_1).mul(web3.toBigNumber(NUMBER_1))
      assert.equal(web3.toBigNumber(result).toFixed(), expectedResult.toFixed())

      return instance.square.call(BIG_NUMBER_1)
    }).then(function(result) {
      let expectedResult = web3.toBigNumber(BIG_NUMBER_1).mul(web3.toBigNumber(BIG_NUMBER_1))
      assert.equal(web3.toBigNumber(result).toFixed(), expectedResult.toFixed())
    })
  });

  it("should correctly shift left or right", function () {
    var instance;
    return rpv.deployed().then(function(inst) {
      instance = inst;
      return instance.shiftLeft.call(BIG_NUMBER_1, 40)
    }).then(function(result) {
      let expectedResult = web3.toBigNumber(BIG_NUMBER_1).mul(web3.toBigNumber(2).pow(40))
      assert.equal(web3.toBigNumber(result).toFixed(), expectedResult.toFixed())

      return instance.shiftLeft.call(BIG_NUMBER_1, 300)
    }).then(function(result) {
      let expectedResult = web3.toBigNumber(BIG_NUMBER_1).mul(web3.toBigNumber(2).pow(300))
      assert.equal(web3.toBigNumber(result).toFixed(), expectedResult.toFixed())

      return instance.shiftLeft.call(BIG_NUMBER_1, -40)
    }).then(function(result) {
      let expectedResult = web3.toBigNumber(BIG_NUMBER_1).divToInt(web3.toBigNumber(2).pow(40))
      assert.equal(web3.toBigNumber(result).toFixed(), expectedResult.toFixed())

      return instance.shiftLeft.call(BIG_NUMBER_1, -300)
    }).then(function(result) {
      let expectedResult = web3.toBigNumber(BIG_NUMBER_1).divToInt(web3.toBigNumber(2).pow(300))
      assert.equal(web3.toBigNumber(result).toFixed(), expectedResult.toFixed())

      return instance.shiftLeft.call(BIG_NUMBER_1, - BIG_NUMBER_1.length * 4)
    }).then(function(result) {
      assert.equal(result, "0x")
    })
  });
*/
});