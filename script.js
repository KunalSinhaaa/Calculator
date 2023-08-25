var op1 = "";
var op2 = "";
var sign = "";

function operate() {
    var num1 = Number(op1);
    var num2 = Number(op2);
    op2 = "";

        switch (sign) {
            case '+':
                num1 = num1 + num2;
                break;

            case '-':
                num1 = num1 - num2;
                break;

            case '*':
                num1 = num1 * num2;
                break;

            case '/':
                num1 = num1 / num2;
                break;

            default:
                break;
    }
    op1 = String(num1);
    sign = "";
    document.getElementById("disp").innerHTML = op1;
}

function Click(b) {
    if (b == '=') {
        if (op1 != "" && op2 != "") {
            operate();
        }
    }
    else if (b == "+" || b == "-" || b == "*" || b == "/") {
        if (op1 != "" && op2 != "") {
            operate();
            sign = b;
            document.getElementById("disp").innerHTML = op1 + sign;
        }
        else if (op1 != "" && op2 == "" && sign=="") {
            sign = b;
            document.getElementById("disp").innerHTML = op1 + sign;
        }
        else if (op1 == "" && op2 == "" && b == "-") {
            op1 = op1 + b;
            document.getElementById("disp").innerHTML = op1;
        }
        else if (op1 != "" && sign != "" && op2 == "" && b == "-") {
            op2 = op2 + b;
            document.getElementById("disp").innerHTML = op1 + sign + op2;
        }
    }
    else {
        if (sign == "") {
            op1 = op1 + b;
            document.getElementById("disp").innerHTML = op1;
        }
        else {
            op2 = op2 + b;
            document.getElementById("disp").innerHTML = op1 + sign + op2;
        }
    }
}

function sperform(m) {
    switch (m) {
        case 'C':
            location.reload();
            break;
        case 'X':
            if ((op1 != "") && (sign != "")) {
                if (op2 == "") {
                    sign = "";
                    document.getElementById('disp').innerHTML = op1;
                }
                else//b has some value
                {
                    var bx = new Array();
                    bx = op2.split("");
                    bx.pop();
                    op2 = bx.join("");
                    document.getElementById('disp').innerHTML = op1 + sign + op2;
                }
            }
            else if ((op1 != "") && (sign == "")) {
                var ax = new Array();
                ax = op1.split("");
                ax.pop();
                op1 = ax.join("");
                document.getElementById("disp").innerHTML = op1;
            }
            break;
    }
}