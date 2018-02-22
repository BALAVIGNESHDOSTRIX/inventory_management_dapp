pragma solidity ^0.4.0;


import "./DostrixToken.sol";

contract IMS is DostrixToken
{
    
   
   
  
    //Structure For Planning Team
    struct Planning
    {
        uint256 LCV; //Load Capacity of Vechicle
        uint256 MXS; //Maximum Speed
        uint256 WPV; //Warrenty for Vechicle
        uint256 VTMC; //Total Production Count
        string WTH; //Product Depended forecast type
        
    }
    
    //structure for customer details
    struct CustomD
    {
        uint256 ProductId;
        string PN; //Product name
        address CADD; //Customer Account details
        address OADD; //Owner that mean dealer of the product address
        uint256 TK; //sending token by using the customer tokens
        uint256 PDC; //Product count that mean Quantity
        
    }
    
    
    //Structure for rquirement Planning Team
    struct RMPLG
    {
        uint256 WHC; //Product Having Weels
        string STY; //Steel Type
        uint256 SQ; //Steel Quality in ISO %-Rate
        uint256 FTS; //FuelTankeSize in Litr..
        string BST; //Breaking System Type Like ABS or Other else
        uint256 TPC; // Total Product Cost per vechicle
        uint256 ENHP; //Engine Total Horse Power
    }
    
   
    
    //Company estimated cost for Project
    struct CEA
    {
        uint256 TPR; //total production -Rate estimated
        uint256 PQT; //Production Quality that mean materials quality
       
    }
    
    //Stock department team
    
    struct StockTeam
    {
        uint256 SWC; //Stock Wheel Count
        string SSTY; //Stock Steel Type
        uint256 SSFC; // Stock fuel tank Count
        uint256 SBSC; //stock BS Count
        uint256 SENG; //stock Engine 
    }
    
   
    
 mapping(uint256 => Planning) public PLN; // vechicle Planning map 
 mapping(uint256 => RMPLG) public RPLN; //vechicle Requirements plan map
 mapping(uint256 => Purchase) public PTEV; //vechicle Purchase Plan map 
 mapping(uint256 => CEA ) public CEAC; //Production estimated map
 mapping(uint256 => StockTeam) public SMTD; //Stock Maintanence department
 mapping(address => CustomD) public CUSD; //Customer burchasedetails

 
 
 uint256 TRUCKQT;
 uint256 BIKEQT;
 uint256 CARQT;
 uint256 SUVQT;
 
 
 function GetPLD(uint256 _PTP,string _WTH, uint256 _LCV,uint256 _MXS ,uint256 _WPV,uint256 _VTMC) public
 {
     var PLNP = PLN[_PTP];
     PLNP.WTH = _WTH;
     PLNP.LCV = _LCV;
     PLNP.WPV = _WPV;
     PLNP.MXS = _MXS;
     PLNP.VTMC = _VTMC;
    
            if(_PTP == 1)
            {
                TRUCKQT = _VTMC;
            }else if(_PTP == 2)
            {
                BIKEQT = _VTMC;
            }
            else if(_PTP == 3)
            {
                CARQT = _VTMC;
            }
            else if(_PTP == 4)
            {
                SUVQT = _VTMC;
            }
     
     var SMTDD = SMTD[_PTP];
     SMTDD.SWC = 20;
     SMTDD.SSTY = "No";
     SMTDD.SSFC = 10;
     SMTDD.SBSC = 12;
     SMTDD.SENG = 8;
     
 }
 
 function GetRPLN(uint256 _PTP,uint256 _WHC,string _STY,uint256 _SQ,uint256 _FTS,string _BST,uint256 _TPC,uint256 _ENHP) public
 {
     var RPLNN = RPLN[_PTP];
     RPLNN.WHC = _WHC;
     RPLNN.STY = _STY;
     RPLNN.SQ = _SQ;
     RPLNN.FTS = _FTS;
     RPLNN.BST = _BST;
     RPLNN.TPC = _TPC;
     RPLNN.ENHP = _ENHP;
     CEAC[_PTP].TPR = PLN[_PTP].VTMC * RPLNN.TPC;
     CEAC[_PTP].PQT = RPLNN.SQ;
    
 }
 
  //Structure for Purchasing Team
    
    struct Purchase
    {
        uint256 TPWC; //purchased Wheel Count
        string PSTY; //purchased Steel type
        uint256 PSTEQ; //purchased Steel Quality
        uint256 TPENGC;//Total purchased engine Count
        uint256 TPFTC; //Total purchased Fuel Count
        uint256 TPBSC; //Total purchased Breaking sys Count
        uint256 TCW; //Total cost of Weels
        uint256 TCB; //Total Cost of Breaking sys
        uint256 TCENG; //Total cost of Engine
        uint256 TPCC; //Total Production product cost
    }
 function GetPTD(uint256 _PTP,uint256 _TPWC,string _PSTY,uint256 _PSTEQ,uint256 _TPENGC,uint256 _TPBSC,uint256 _TCW,uint256 _TCB,uint256 _TCENG,uint256 _TPCC,uint256 _TPFTC)
 {
     var PURDUP = PTEV[_PTP];
     PURDUP.TPWC = _TPWC;
     PURDUP.PSTY = _PSTY;
     PURDUP.PSTEQ = _PSTEQ;
     PURDUP.TPENGC = _TPENGC;
     PURDUP.TPBSC = _TPBSC;
     PURDUP.TCW = _TCW;
     PURDUP.TCB = _TCB;
     PURDUP.TCENG = _TCENG;
     PURDUP.TPCC = _TPCC;
     PURDUP.TPFTC = _TPFTC;
 }
 
 function getTransferR(address _form,address _to,uint256 _amount) public 
 {
   transferFrom(_form,_to,_amount);

}

function getPurchased(uint256 _productid,string _name,address _cusadd,address _OwnerAdd,uint256 _tokens,uint256 _quantity) public
{
    var CUSDD = CUSD[_cusadd];
    CUSDD.PN = _name;
    CUSDD.OADD = _OwnerAdd;
    CUSDD.TK = _tokens;
    CUSDD.PDC = _quantity;
    if(_productid == 1)
    {
        TRUCKQT = TRUCKQT - _quantity;
    }
    else if(_productid == 2)
    {
        BIKEQT = BIKEQT - _quantity;
    }
    else if(_productid == 3)
    {
        BIKEQT = CARQT - _quantity;
    }
    else if(_productid == 4)
    {
        SUVQT = SUVQT - _quantity;
    }
}

function gettruckQT() public view returns(uint256)
{
    return TRUCKQT;
}

function getBikeQT() public view returns(uint256)
{
    return BIKEQT;
}

function getCarQT() public view returns(uint256)
{
    return CARQT;
}
function getSuvQT() public view returns(uint256)
{
    return SUVQT;
}
}
