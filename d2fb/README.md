# d2json

- bootstrap
  - begin with d2f.json (generated elsewhere)
  - json2js d2f.json -> 
  - write stubs for all Components (handlers)
	- uncompress (me, message)
	- diagramparser (me, message)
	- styleexpander (me, message)
	- asfactbase (me, message)
	- deletblanklines (me, message)
	- sortForPROLOG (me, message)
	- deleteTrailingSugar (me, message)
   - combine stubs + cos.js -> d2f.js
   - test
   - flesh out stubs 1 at a time

- problem:
  - compiled testbench.drawio -> testbench.json
  - but, diff says that new testbench.json is different from boot/das2json/testbench.json
	- observed: new testbench.js contains duplicate connections
	- theory: fb.pl is the same before final step
		- experiment: 
			- compare tempfb.pl with output from boot/das2json/
			- instrument boot/das2json to make a copy of fb.pl before json-ifying it
			- diff
			- results - very different sizes, why?
```
$ ls -l tempfb.pl 
-rw-r--r--  1 tarvydas  staff  29391 17 May 07:16 tempfb.pl
$ ls -l boot/das2json/tempfb-boot.pl 
-rw-r--r--  1 tarvydas  staff  143846 17 May 07:16 boot/das2json/tempfb-boot.pl
$ 
```
		- further data gathering
			- create probe-fbd2f.pl after d2f and probe-fbd2f-boot.pl
			- diff
		- further data gathering
			- not measuring the same results
		- further data gathering
			- diff probe-fbd2f.pl boot/das2json/probe-fbd2f-boot.pl
```
1d0
<            
449c448
< diagram_fact(y, cell_6, -785).
---
> diagram_fact(y, cell_6, -780).
451c450
< diagram_fact(y, cell_9, -650).
\ No newline at end of file
---
> diagram_fact(y, cell_9, -650).
$ 
```
			- output from d2f is slightly different from boot/das2json
				- -785 vs -780
				- No newline
