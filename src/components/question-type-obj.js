export const option = {
    an: [
        ["An ninh 1", "aviation-law"],
        ["An ninh 2", "facilities"],
        ["An ninh 3", "general-knowledge"],
    ],
    kl: [
        ["VN Aviation Law", "aviation-law"],
        ["Facilities", "facilities"],
        ["General Knowledge", "general-knowledge"],
        ["Human Factor", "human-factor"],
        ["Meteology", "meteology"],
        ["Navigation Principle", "navigation-principle"],
        ["Operational procedure", "operational-procedure"],
        ["Surveillance system", "surveillance-system"],
        ["Characteristics of air traffic movement", "characteristics-of-air-traffic-movement"],
        ["Shifts management", "shifts-management"],
        ["AIS", "ais"]
    ],
    ki: [
        ["Kĩ thuật 1", "aviation-law"],
        ["Kĩ thuật 2", "facilities"],
        ["Kĩ thuật 3", "general-knowledge"],
        ["Kĩ thuật 4", "human-factor"],
        ["Kĩ thuật 5", "meteology"],
        
    ],

}

export const major_op = [
    ["An ninh", "an"],
    ["Không lưu - miền Bắc", "klmb"],
    ["Không lưu - miền Trung", "klmt"],
    ["Không lưu - miền Nam", "klmn"],
    ["FDO - HF - Thông báo hiệp đồng bay", "tbhd"],
    ["Kĩ thuật", "kt"],
    ["ARO AIS", "aa"],
    ["Signalman", "sgm"],
    ["Khí tượng", "kht"],
    ["Sơ đồ, bản đồ, dữ liệu hàng không", "dl"],
    ["Phương thức bay - Pans-ops", "po"],
    
]




export const unit_op = {
    "klmb": [
        ["Hà Nội ACC Radar", "HAN-ACC-RADAR"],
        ["Hà Nội ACC Non Radar", "HAN-ACC-NON-RADAR"],
        ["Kíp trưởng Hà Nội ACC", "KT-ACC-HAN"],
        ["Nội Bài APP Radar", "NBA-APP-RADAR"],
        ["Nội Bài APP Non Radar", "NBA-APP-NON-RADAR"],
        ["Kíp trưởng Nội Bài APP TWR", "KT-NB-APP-TWR"],
        ["Nội Bài Tower", "TWR-NBA"],
        ["Điện Biên Tower", "TWR-DB"],
        ["Cát Bi Tower", "TWR-CB"],
        ["Thọ Xuân Tower", "TWR-TX"],
        ["Vinh Tower", "TWR-V"],
        ["Đồng Hới Tower", "TWR-DH"],
        ["Nội Bài Ground", "GCU-NBA"],
    ],
    "klmt": [
        ["Đà Nẵng APP Radar", "DAN-APP-RADAR"],
        ["Đà Nẵng APP Non Radar", "DAN-APP-NON-RADAR"],
        ["Kíp trưởng Đà Nẵng APP TWR", "KT-DAN-APP-TWR"],
        ["Đà Nẵng TWR", "TWR-DAN"],
        ["Phú Bài TWR", "TWR-PBA"],
        ["Chu Lai TWR", "TWR-CLA"],
        ["Playku TWR", "TWR-PLK"],
        ["Phù Cát TWR", "TWR-PCA"],
        ["Đà Nẵng GCU", "GCU-DAN"],
    ],
    "klmn": [
        ["Hồ Chí Minh ACC Radar", "HCM-ACC-RADAR"],
        ["Hồ Chí Minh ACC Non Radar", "HCM-ACC-NON-RADAR"],
        ["Kíp trưởng Hồ Chí Minh ACC", "KT-ACC-HCM"],
        ["Tân Sơn Nhất APP Radar", "TSN-APP-RADAR"],
        ["Tân Sơn Nhất APP Non Radar", "TSN-APP-NON-RADAR"],
        ["Kíp trưởng Tân Sơn Nhất APP TWR", "KT-TSN-APP-TWR"],
        ["Tân Sơn Nhất Tower", "TSN-TWR"],
        ["Tuy Hòa Tower", "TWR-TH"],
        ["Cam Ranh Tower", "TWR-CR"],
        ["Buôn Ma Thuột Tower", "TWR-BMT"],
        ["Liên Khương Tower", "TWR-LK"],
        ["Rạch Giá Tower", "TWR-RG"],
        ["Cà Mau Tower", "TWR-CM"],
        ["Cần Thơ Tower", "TWR-CT"],
        ["Côn Sơn Tower", "TWR-CS"],
        ["Phú Quốc Tower", "TWR-PQ"],
        ["Tân Sơn Nhất Ground", "GCU-TSN"]
    ],
    "tbhd": [
        ["Miền Bắc", "HCM-ACC-radar"],
        ["Miền Trung", "HCM-ACC-non-radar"],
        ["Miền Nam", "KT-ACC-HCM"],
        // ["Tân Sơn Nhất APP Radar", "TSN-APP-RD"],
        // ["Tân Sơn Nhất APP Non Radar", "TSN-APP-NON-RD"],
    ],
    "kt": [
        ["Ghi âm", "GA"],
        ["VHF", "VHF"],
        ["ADS_B", "ADS_B"],
        ["AMHS", "AMHS"],
        ["Bay hiệu chỉnh", "BHC"],
        ["Lý thuyết chung ghi âm - AMHS", "LTCGAAMHS"],
        ["NDB_QLB", "NDB"],
        ["Radar", "RADAR"],
        ["RDP_FDP", "RDP_FDP"],
        ["VVCS", "VVCS"],
        ["VOR_DME", "VOR_DME"],
    ],
    "kht": [
        ["Quan trắc", "QT"],
        ["Dự báo", "DB"],
    ],
    "aa": [
        ["AIS sân bay quốc nội", "AIS_QN"],
        ["AIS sân bay quốc tế - Kíp viên", "AIS_QN_KV"],
        ["AIS sân bay quốc tế - Kíp trưởng", "AIS_QN_KT"],
        ["AIP", "AIP"],
        ["NOTAM - Kíp viên", "NT_KV"],
        ["NOTAM - Kíp trưởng", "NT_KT"],
        ["ARO - Kíp trưởng", "ARO_KT"],
        ["ARO - Kíp viên", "ARO_KT"],
    ],
    "dl": [
        ["Dữ liệu hàng không", "DL"],
        ["Sơ đồ, bản đồ hàng không", "SDBD"],
    ]
        
}



export const ques_op = {
    "kl": [["Lý thuyết chung", "LTC"],  ["Lý thuyết cơ sở", "LTCS"]],
    "ADS_B": [["Lý thuyết chung", "ADS_B_LTC"], ["Lý thuyết cơ sở", "ADS_B_LTCS"]],
    "AMHS": [["AMHS", "AMHS"]],
    "BHC": [["Bay hiệu chỉnh", "BAY_HC"],],
    "GA": [
        ["Ghi âm ACC HCM", "GA_ACC_HCM"],
        ["Ghi âm db miền Bắc", "GA_DP_MB"],
        ["Ghi âm địa phương miền Nam", "GA_DP_MN"],
        ["Ghi âm địa phương miền Trung", "GA_DP_MT"],
        ["Ricochet ATCC - HAN", "GA_RICO_ATCC_HAN"],
        ["Ricochet TWR Nội Bài", "GA_RICO_TWR_NB"],
        ["Ghi âm TTKSLKL", "GA_TTKSLKL"],
        ["Ghi âm TWR TSN", "GA_TWR_TSN"],
        ["Xử lý sự cố TWR MN", "GA_XLSC_TWR_MN"],
        ["Câu hỏi hỏng hóc chung", "GA_CH"],
    ],
    "LTCGAAMHS": [["Lý thuyết chung ghi âm - AMHS", "LTC_GA_AMHS"]],
    "NDB": [["Lý thuyết chung", "NDB_QLB_LTC"], ["Lý thuyết cơ sở", "NDB_QLB_LTCS"]],
    "VHF":[
        ["VHF 3 miền", "VHF_3_MIEN"],
        ["HF miền Nam", "VHF_CH_HF_MN"],
        ["VHF Jotron miền Nam và miền Trung", "VHF_JOTRON_TA7650_MN_MT"],
        ["VHF RS SU250A EU230 miền Nam", "VHF_RS_SU250A_EU230_MN"],
    ],
    "RADAR": [
        ["RSM970S", "RSM970S"],
        ["RSM970S miền Nam", "RSM970S_MN"],
        ["STAR2000", "STAR2000"],
        ["STAR2000 miền Nam", "STAR2000_MN"],
        ["TRAC2000", "TRAC2000"],
        ["TRAC2000 RS970 miền Trung", "TRAC2000_RS970_MT"],
    ],
    "RDP_FDP": [
        ["A-SMGCS TWR Tân Sơn Nhất", "A_SMGCS_TSN"],
        ["ATM Eurocat X", "ATM_EUROCAT_X"],
        ["ATM miền Bắc", "ATM_MB"],
        ["ATM miền Nam", "ATM_MN"],
        ["Lý thuyết chung RDP_FDP", "LTC_RDP_FDP"],
        ["RDP Đà Nẵng", "RDP_DAN"],
        ["Xử lí sự cố ATM", "XLSC_ATM"]
    ],
    "VVCS":[
        ["VCCS 3020X AACC HCM", "VCCS_3020X_AACC_HCM"],
        ["RSM970S miền Nam", "VCCS_FREQUENTIS_ATCC_HN"],
        ["GAREX Đà Nẵng", "VCCS_GAREX_DN"],
        ["GAREX TWR Nội Bài", "VCCS_GAREX_TWR_NB"],
        ["LIBERTY STAR 3 TWR Tân Sơn Nhất", "VCCS_LIBERTY_STAR_3_TWR_TSN"],
        ["Lý thuyết chung", "VCCS_LTC"],
    ],
    "VOR_DME":[["VOR_DME", "VOR_DME"]],


    
    "QT": [["Lý thuyết chung", "LTC"], ["Lý thuyết cơ sở", "LTCS"]],
    "DB": [["Lý thuyết chung", "LTC"], ["Lý thuyết cơ sở", "LTCS"]],

    

    "AIS_QN": [["AIS sân bay quốc nội", "AIS-AD-AIS-QN-LTC-AGA"]],
    "AIS_QN_KV":   [["AIS sân bay quốc tế - Kíp viên", "AIS-AD-AIS-KVQT-LTC-AGA"]],
    "AIS_QN_KT":    [["AIS sân bay quốc tế - Kíp trưởng", "AIS-AD-AIS-KTQT-LTC-AGA"]],
    "AIP":    [["AIP", "AIS-AIP-LTC-AGA"]],
    "NT_KV":   [["NOTAM - Kíp viên", "AIS-NOTAMKV-LTC-AGA"]],
    "NT_KT":   [["NOTAM - Kíp trưởng", "AIS-NOTAMKT-LTC-AGA"]],
    "ARO_KT":   [["ARO - Kíp trưởng", "AIS-ARO-KT-LTC-AGA"]],
    "ARO_KV":  [["ARO - Kíp trưởng", "AIS-ARO-KV-LTC-AGA"]],


    
    "DL": [["Lý thuyết chung", "AIS-CSDL-LTC"], ["Lý thuyết cơ sở", "AIS-CSDL-LTCS"]],
    "SDBD": [["Lý thuyết chung", "AIS-SDBD-LTC"], ["Lý thuyết cơ sở", "AIS-SDBD-LTCS"]],

}
