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

	* INDICATORS *
	INCIDENCE_FOR_MAPS[VL_INDEX] = "k8OBrohsSSg"; //  VL_EPI_INC_PopData_LSH_10000
	INCIDENCE_FOR_MAPS[CL_INDEX] = "Yw3FULKBFgt"; // CL_EPI_INC_PopData_LSH_10000
	INCIDENCE_FOR_MAPS[ACL_INDEX] = "wR0vjRjXpO8"; // ACL_EPI_INC_PopData_LSH_10000
	INCIDENCE_FOR_MAPS[ZCL_INDEX] = "bkNwROwt8lc"; // ZCL_EPI_INC_PopData_LSH_10000

	INCIDENCE_FOR_CHARTS[VL_INDEX] = "R8mWrVeFBog";	 // VL_EPI_INC_PopUN_10000
	INCIDENCE_FOR_CHARTS[CL_INDEX] = "e16AVRh07kk";	 // CL_EPI_INC_PopUN_10000
	INCIDENCE_FOR_CHARTS[ACL_INDEX] = "VxWuCmDA1x8"; // ACL_EPI_INC_PopUN_10000
	INCIDENCE_FOR_CHARTS[ZCL_INDEX] = "hRzNpxG8Qg3"; // ZCL_EPI_INC_PopUN_10000

	POP_AT_RISK[VL_INDEX] = "qZrDWm2KJOh";
	POP_AT_RISK[CL_INDEX] = "FwXQC7ARUBf";
	POP_AT_RISK[ACL_INDEX] = "NYzjVXzaod5";
	POP_AT_RISK[ZCL_INDEX] = "b4CaeIjuNqc";