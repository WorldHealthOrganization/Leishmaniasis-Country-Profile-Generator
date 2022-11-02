	/****************************************************************************************************
 	 **********		   																		   **********
 	 **********                      Report App for DHIS2 Leishmaniasis 2017               	   **********
 	 **********		   																		   **********
	 ****************************************************************************************************/


	 	* @author  Ramon Jose Jimenez Pomareta 
		* @email ramon@pomareta.ch
 		* @version 1.0 
		* @date 26/04/2017


		* Some comments
			Since this App has to be made in only one file, all is here.
			When needed external js plugins, i.e. jquery-te and jquery-ui, I have stored a version in 
			https://github.com/Rjjp/plugins
			In order to share raw files, I have used https://rawgit.com/


		* Sections of the code. 
		1. CSS styles
		2. JavaScript
			JavaScript imports
			CONSTANTS
			FUNCTIONS CALLING THE API 
			FILLING LOGICAL STRUCTURES (ARRAYS)
			AUXILIARY FUNCTIONS
			CHARTS FUNCTIONS
		3. HTML Code



		** Dependencies **

	* DATASETS *
	var CL_DETAILED = "tnek2LjfuIm";
	var CL_SIMPLE = "zna8KfLMXn4";
	var VL_DETAILED = "fdBM4sWSuPR";
	var VL_SIMPLE = "SHw2zOysJ1R";
	var AZCL_DETAILED = "Uc3j0vpsfSB";
	var AZCL_SIMPLE = "Sn0dExPzQqW";
	var GI = "NKWbkXyfO5F";
	var GHO_NTDS = "p0NhuIUoeST";

	* PROGRAMS *
	var CL_MONTHLY = "w9hSFsNr3Vh";
	var VL_MONTHLY = "i5JSf4ffFl2";
	var FOOTNOTES = "NVUlJzIakuO";
	var SUBN_ENDEMCTY = "Jd8gnEIt8uT";

	* SQL Views *
	var SQL_COC_DS = "mejiVo59hWs";
	var SQL_DE_DS = "oQdIVqkVlxC";
	var SQL_DE_P = "IrawAndH02Y";
	var SQL_OU_LEVELS = "ly3JqHMcHyk";

	* INDICATORS *

    UN_WPP[POP_AGE_U15] = "hB6weZHPrQs";
	UN_WPP[POP_AGE_OVER15] = "fcvWkgE2D81";
	UN_WPP[POP_GENDER_FEMALE] = "YqYnthOMpKZ";
	UN_WPP[POP_GENDER_MALE] = "l8oBc9hn1OH";

	LAB_PARASITO_RESULT_NEWUNSP[VL_INDEX] = "wcQXFCgeirI"; // IA_VL_LAB_parasito_result_type_NewUnsp
	LAB_PARASITO_RESULT_NEWUNSP[CL_INDEX] = "I0UeqrXgFP3"; // IA_CL_LAB_parasito_result_type_NewUnsp
	LAB_PARASITO_RESULT_NEWUNSP[ACL_INDEX] = "xlKiq2a2VnC"; // IA_ACL_LAB_parasito_result_type_NewUnsp
	LAB_PARASITO_RESULT_NEWUNSP[ZCL_INDEX] = "w0Jp3JgB4QV"; // IA_ZCL_LAB_parasito_result_type_NewUnsp

	LAB_PARASITO_TESTED_NEWUNSP[VL_INDEX] = "apw84Yy3Bmm"; // IA_VL_LAB_parasito_tested_type_NewUnsp
	LAB_PARASITO_TESTED_NEWUNSP[CL_INDEX] = "LtmgT3l81DD"; // IA_CL_LAB_parasito_Suspects_NewUnsp
	LAB_PARASITO_TESTED_NEWUNSP[ACL_INDEX] = "wXzlrrmB33B"; //  IA_ACL_LAB_parasito_Suspects_NewUnsp
	LAB_PARASITO_TESTED_NEWUNSP[ZCL_INDEX] = "ZfIJmWMYXuz"; // IA_ZCL_LAB_parasito_Suspects_NewUnsp

	DIRECT_EXAM_DIAGNOSED[VL_INDEX] = "waGzv39rlKk"; // IA_VL_directExam_diagCases
	DIRECT_EXAM_DIAGNOSED[CL_INDEX] = "KMCo5B0frEb"; // IA_CL_directExam_diagCases
	DIRECT_EXAM_DIAGNOSED[ACL_INDEX] = "NQcaaslXLbQ"; // IA_ACL_directExam_diagCases
	DIRECT_EXAM_DIAGNOSED[ZCL_INDEX] = "o3OxTZj5SN9"; // IA_ZCL_directExam_diagCases

	POSITIVE_SLIDES_PROP[VL_INDEX] = "GacG3QWCHcd"; // IA_VL_positiveSlides_PROP
	POSITIVE_SLIDES_PROP[CL_INDEX] = "YJJniMaZ9dy"; // IA_CL_positiveSlides_PROP
	POSITIVE_SLIDES_PROP[ACL_INDEX] = "CsrJBUGBpuW"; // IA_ACL_positiveSlides_PROP
	POSITIVE_SLIDES_PROP[ZCL_INDEX] = "wUoGgWWIyUP"; // IA_ZCL_positiveSlides_PROP

	NEW_AND_UNSP_CASES[VL_INDEX] = "TAi5pNjuxmq"; // IA_VL_EPI_NewUnsp_INT
	NEW_AND_UNSP_CASES[CL_INDEX] = "CeO5dTNMbPp"; // IA_CL_EPI_NewUnsp_INT
	NEW_AND_UNSP_CASES[ACL_INDEX] = "ZUL3QhfRZBT"; // IA_ACL_EPI_NewUnsp_INT
	NEW_AND_UNSP_CASES[ZCL_INDEX] = "LCa3hY8xkst"; // IA_ZCL_EPI_NewUnsp_INT

	TREAT_COMPLETED[VL_INDEX] = "dUns9PpQ58C"; // NTD_LSH_VL_TREAT_completed_I
	TREAT_COMPLETED[CL_INDEX] = "foObvaWTV2q"; // NTD_LSH_CL_TREAT_completed_I
	TREAT_COMPLETED[ACL_INDEX] = "uSRDXhpcEjS"; // NTD_LSH_ACL_TREAT_completed_I
	TREAT_COMPLETED[ZCL_INDEX] = "ZtbetBov4Nk"; // NTD_LSH_ZCL_TREAT_completed_I

	TREAT_OUTCOME_CURE[VL_INDEX] = "Ks5Jju6anpF"; // IA_NTD_VL_ITO_cureRate
	TREAT_OUTCOME_CURE[CL_INDEX] = "kVPOCIEBIyW"; // IA_NTD_CL_ITO_cureRate 
	TREAT_OUTCOME_CURE[ACL_INDEX] = "IeniC1gZeI4"; // IA_NTD_ACL_ITO_cureRate
	TREAT_OUTCOME_CURE[ZCL_INDEX] = "Gf2RLaWerOl"; // IA_NTD_ZCL_ITO_cureRate

	TREAT_OUTCOME_FAIL[VL_INDEX] = "jEdZE79G6KZ"; // IA_NTD_VL_ITO_failureRate
	TREAT_OUTCOME_FAIL[CL_INDEX] = "VoqodpvVc0l"; // IA_NTD_CL_ITO_failureRate 
	TREAT_OUTCOME_FAIL[ACL_INDEX] = "adkROLW4Kdr"; // IA_NTD_ACL_ITO_failureRate
	TREAT_OUTCOME_FAIL[ZCL_INDEX] = "ep15GwmenJh"; // IA_NTD_ZCL_ITO_failureRate

	TREAT_OUTCOME_FATAL[VL_INDEX] = "RcXtqpnzUkF"; // IA_NTD_VL_ITO_fatalityRate
	TREAT_OUTCOME_FATAL[CL_INDEX] = "h0wM7ryy0mK"; // IA_NTD_CL_ITO_fatalityRate 
	TREAT_OUTCOME_FATAL[ACL_INDEX] = "LsjoXBjbXbL"; // IA_NTD_ACL_ITO_fatalityRate
	TREAT_OUTCOME_FATAL[ZCL_INDEX] = "XUDNMjVo899"; // IA_NTD_ZCL_ITO_fatalityRate

	SCREEN_PASSIVE[VL_INDEX] = "ECAJUz3nff5"; // NTD_LSH_VL_SCREEN_passive_I
	SCREEN_PASSIVE[CL_INDEX] = "zo5BQlapP45"; // NTD_LSH_CL_SCREEN_passive_I
	SCREEN_PASSIVE[ACL_INDEX] = "vq1FX8vBEi1"; // NTD_LSH_ACL_SCREEN_passive_I
	SCREEN_PASSIVE[ZCL_INDEX] = "kknHr7KtRTs"; // NTD_LSH_ZCL_SCREEN_passive_I

	INCIDENCE_FOR_MAPS[VL_INDEX] = "k8OBrohsSSg"; //  VL_EPI_INC_PopData_LSH_10000
	INCIDENCE_FOR_MAPS[CL_INDEX] = "Yw3FULKBFgt"; // CL_EPI_INC_PopData_LSH_10000
	INCIDENCE_FOR_MAPS[ACL_INDEX] = "wR0vjRjXpO8"; // ACL_EPI_INC_PopData_LSH_10000
	INCIDENCE_FOR_MAPS[ZCL_INDEX] = "bkNwROwt8lc"; // ZCL_EPI_INC_PopData_LSH_10000

	INCIDENCE_FOR_CHARTS[VL_INDEX] = "R8mWrVeFBog";	 // VL_EPI_INC_PopUN_10000
	INCIDENCE_FOR_CHARTS[CL_INDEX] = "e16AVRh07kk";	 // CL_EPI_INC_PopUN_10000
	INCIDENCE_FOR_CHARTS[ACL_INDEX] = "VxWuCmDA1x8"; // ACL_EPI_INC_PopUN_10000
	INCIDENCE_FOR_CHARTS[ZCL_INDEX] = "hRzNpxG8Qg3"; // ZCL_EPI_INC_PopUN_10000

	var POP_AT_RISK = new Array(4);
	POP_AT_RISK[VL_INDEX] = "qZrDWm2KJOh";
	POP_AT_RISK[CL_INDEX] = "FwXQC7ARUBf";
	POP_AT_RISK[ACL_INDEX] = "NYzjVXzaod5";
	POP_AT_RISK[ZCL_INDEX] = "b4CaeIjuNqc";
