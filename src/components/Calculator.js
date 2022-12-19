import '../index';
import '../App.css';
import React, { Component } from 'react';
import { useState } from "react";

export default function Calculator() {
  const [display, setDisplay] = useState("");
  const [back, setBack] = useState("");
  const [pre, setPre] = useState("");
  const [dr, setDr] = useState("0");

  function updateDisplay(value){
    setDisplay(display + value);
  }

  function updateBack(value){
    setBack(back + value);
  }
  
  function compute(){
    try{
        setPre(display);
        setDisplay(eval?.(`"use strict";(${back})`));
    } catch {
      setDisplay("Syntax Error!");
    }
  }
  function updateRad(){
    if (dr == "1"){
      setDr("0");
    } else {
      setDr("1");
    }
  }

  function btnAC(){
    setDisplay("");
    setBack("");
    setPre("");
  }

  Number.prototype.factorial = function () {
    return this > 0 ? this * (this - 1).factorial() : 1;
  }
  // referenced from stack overflow "Replacing ! in a string with factorial function in Javascript"

  // fix the after enter the display should clear when adding new input 
  // maybe add ) until after entered 
  // rad to deg for: sin cos tan 

  return (
    <>
    <div class="flex justify-center pt-20">
      <div class="flex flex-col container rounded-t-lg border w-10/12 hover:border-gray-300">
        <input disabled class="text-gray-300 pt-2 pr-5 text-right" id="pre" value={pre}></input>
        <input disabled class="text-black-100 text-3xl pr-5 pb-2 text-right" id="display" value={display}></input>
      </div>
    </div>
    <div class="flex justify-center">
      <div class="container border rounded-b-lg shadow-lg w-10/12 px-4 py-4">
        <div class="flex flex-row space-x-4">
          <button onClick={() => {updateRad()}} class="button-gray-2">{dr === "1" ? "Deg" : "Rad"}</button>
          <button onClick={() => {updateDisplay('!'); updateBack('["factorial"]()'); }} class="button-gray-2">x!</button>
          <button onClick={() => {updateDisplay('('); updateBack("(")}} class="button-gray-2">(</button>
          <button onClick={() => {updateDisplay(')'); updateBack(")")}} class="button-gray-2">)</button>
          <button onClick={() => {updateDisplay('%'); updateBack("%")}} class="button-gray-2">%</button>
          <button onClick={() => btnAC()} class="button-gray-2">AC</button>
        </div>
        <div class="flex flex-row space-x-4 pt-4">
          <button onClick={() => {updateDisplay('sin('); updateBack("Math.sin(");}} class="button-gray-2">sin</button>
          <button onClick={() => {updateDisplay('ln('); updateBack("Math.log(")}} class="button-gray-2">ln</button>
          <button onClick={() => {updateDisplay('7'); updateBack("7")}} class="button-gray-1">7</button>
          <button onClick={() => {updateDisplay('8'); updateBack("8")}} class="button-gray-1">8</button>
          <button onClick={() => {updateDisplay('9'); updateBack("9")}} class="button-gray-1">9</button>
          <button onClick={() => {updateDisplay('/'); updateBack("/")}} class="button-gray-2">&divide;</button>
        </div>
        <div class="flex flex-row space-x-4 pt-4">
          <button onClick={() => {updateDisplay('cos('); updateBack("Math.cos(");}} class="button-gray-2">cos</button>
          <button onClick={() => {updateDisplay('log('); updateBack("Math.log10(")}} class="button-gray-2">log</button>
          <button onClick={() => {updateDisplay('4'); updateBack("4")}} class="button-gray-1">4</button>
          <button onClick={() => {updateDisplay('5'); updateBack("5")}} class="button-gray-1">5</button>
          <button onClick={() => {updateDisplay('6'); updateBack("6")}} class="button-gray-1">6</button>
          <button onClick={() => {updateDisplay(' x '); updateBack("*")}} class="button-gray-2">&times;</button>
        </div>
        <div class="flex flex-row space-x-4 pt-4">
          <button onClick={() => {updateDisplay('tan('); updateBack("Math.tan(");}} class="button-gray-2">tan</button>
          <button onClick={() => {updateDisplay('√('); updateBack("Math.sqrt(")}} class="button-gray-2">&radic;</button>
          <button onClick={() => {updateDisplay('1'); updateBack("1")}} class="button-gray-1">1</button>
          <button onClick={() => {updateDisplay('2'); updateBack("2")}} class="button-gray-1">2</button>
          <button onClick={() => {updateDisplay('3'); updateBack("3")}} class="button-gray-1">3</button>
          <button onClick={() => {updateDisplay('-'); updateBack("-")}} class="button-gray-2">-</button>
        </div>
        <div class="flex flex-row space-x-4 pt-4">
          <button onClick={() => {updateDisplay('10^'); updateBack("10**")}} class="button-gray-2">EXP</button>
          <button onClick={() => {updateDisplay('^'); updateBack("**")}} class="button-gray-2">X<sup>y</sup></button>
          <button onClick={() => {updateDisplay('0'); updateBack("0")}} class="button-gray-1">0</button>
          <button onClick={() => {updateDisplay('.'); updateBack(".")}} class="button-gray-1">.</button>
          <button onClick={() => compute()} class="button-blue-1">=</button>
          <button onClick={() => {updateDisplay('+'); updateBack("+")}} class="button-gray-2">+</button>
        </div>
      </div>
    </div>
    </>
  );
}