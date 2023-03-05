const Technologies = {
    JAVA: {
        link: "https://img.shields.io/badge/Java-white?style=flat-square&color=660400&logo=data:image/png;base64," +
            "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFyGlUWHRYTUw6Y29tLmFkb2Jl" +
            "LnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4" +
            "bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDg4LCAyMDIwLzA3" +
            "LzEwLTIyOjA2OjUzICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRm" +
            "LXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20v" +
            "eGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDov" +
            "L25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2Vs" +
            "ZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0" +
            "b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjIuMCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIzLTAzLTA0VDExOjI3OjU5" +
            "KzAxOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIzLTAzLTA0VDExOjI3OjU5KzAxOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMy0w" +
            "My0wNFQxMToyNzo1OSswMTowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0MTI1NWU3OS1mMGRmLTQwNDEtYmNmNy1kMjY0" +
            "ODY2YTY5ZGIiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDphOTkyMmMzZC0zOWE4LTcwNGMtOTAzYi01" +
            "Mzk3NWZlZTgwODciIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkMGJmM2E3Zi02NDRkLWIyNDAtYTMxMS05M2Q5" +
            "MzY1YmY3YzUiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIj4gPHhtcE1NOkhpc3Rvcnk+IDxy" +
            "ZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpkMGJmM2E3Zi02" +
            "NDRkLWIyNDAtYTMxMS05M2Q5MzY1YmY3YzUiIHN0RXZ0OndoZW49IjIwMjMtMDMtMDRUMTE6Mjc6NTkrMDE6MDAiIHN0RXZ0OnNv" +
            "ZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi4wIChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQi" +
            "IHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NDEyNTVlNzktZjBkZi00MDQxLWJjZjctZDI2NDg2NmE2OWRiIiBzdEV2dDp3aGVu" +
            "PSIyMDIzLTAzLTA0VDExOjI3OjU5KzAxOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjIuMCAoV2lu" +
            "ZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8" +
            "L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+lycGFAAAC9BJREFUeJzdm3l0VNUdxz9vlmQySZgEAiQu" +
            "EFZZtAhYkIqWKi6gYlsVK+ipx1rt6enmUmtbWu2p1oW61dajVlqXo6Kt1VpLLS3gsSJFW61KACsGETEEEpLIJJnlzXv94/se85gs" +
            "M0lmMKe/c95J3n3z7r2/3/3+1nufYds2vdG2OZFenxeAioEVwJ+Ap4DeJ9gLjd/QlvU3vv52XkBKALXAFcCwQg82GAVgA83APGBS" +
            "oQcbjAIw0LwMYDYQKORgg1EAQ50L4DggXMjBBqMApgCHO//XAMFCDjYYBTCXtABcVSgYDTYBjAC+QFrv9wLJQg44mARQDNwAfNrT" +
            "9gbQUchBB4sAhgA3AV/xtMWAdRQYAQV1MTnSBOBnwHkZ7c8gBBSUPmkEnAv8nq7MbwJuocDwh08OAeUI8l8Chmc8awSuBd46FBP5" +
            "JARwFHA3cCpdERgFrgH+mtF+NPB1wI9yhLzRoVaBc4C/AKd3M/ZO4CJgJWA5bScCTyBj+FngD/me0KFEwCLgQaCqm2fvoRVe7dzX" +
            "Aj8ELgBKgfXAUuDDfE/qUCFgAXA/XZm3gLXA2Yj5cuAqYCNwGRACfg18HiGk37WBnuhQIGAqcC9QndGeBB4Dvol0fyZwB3CS8zyG" +
            "DOUtgNmXAf2pBLnKqtACKEJQrs1ojwL3OM9s4GQkpKOc5/uB5cCt5MC8bRgEzBg+y8RnpWgcOR0zUMqYHCZYaAEsQNbeS50o5L3d" +
            "uT8NeAQY6dx3oJW/NVvnLuOhWJyGmmNoi4yipHM/z53zDC2VQzk+hwkWUgDFyKp79d5CjLvMjwPuJM08wJMIHb2QgT8VJ9wRo6Fm" +
            "MtvHTOG1Wd/n3QkzCSahpBNK201yYa+QApiA9N9Lm9DqumMvQvm/S80IDb1GgD4rTmvFeOqmzmHbhMW8OW0+kTaobDGx+5g8F1IA" +
            "I5AL89K/UdETlAAtyHj+OvBOr70aBqFYjA9GjeeJJQ8wrBmqmsR4X5mHwgogQVcDFkLRnOWMPSTj+XCgrLdOfWacvcMn8frMy6lq" +
            "sggmrX4xfqC//r+albYBTRlto0lXeExgX8bzqcAZvXXqs5K0VE6gbuoCihJWbz/NibIiINzxcY/PbAM6SyL04HN3A68CszxtY1GR" +
            "MwHEge0Z7wSBbwF/A7Z27dLAZ6UobW+kKNE/yGdSVgE8tvSVbtttw0dxopXznzoDMwDx4ghG112mZ1Gq6wZBI1Bi8zIydBtQCOyl" +
            "8cDlwDIyjKHPStBcdTTPn/UQJZ2pbFPPibIKYNcRc3p8Ztiw4rItDGvazLlPn0tHuBgzEPIK4iXnWuzc+4DzkQBshJB3kcfw0hXA" +
            "n4E1B49nkSgqZ8/IyY6bGzhltQEB0+zx8qdM9g2dRP24Rdx15UesPfleyqJteFQiifz8Tk+X85ExBNmJFd0MG0YBUkmXCVsp/PlZ" +
            "fPU30A78KRMwiBdXs3XyRdx23X5enfUDQrEOfFYKsDeiwKfdeWUs4MLKAn6LqkKZdCweL+GzUuwvH8XKJS8SiuVn9SFvXsDGZ6Ww" +
            "DR9+s4T1J17H+hOuJxkswzYCtmFbdyNGUyhCXOx5eQ/wE+A/GZ0epJ6GnaK9tBoz0AUUA6ICuEGbkg6Tjccv4/ZrdlN39JcJmDEM" +
            "27qa9EqfycE7v5uQqpgZbe0AATNG48jjWHnhSwQT+Vt9KGAc4LNMIm0mqxbeyRszvkHAjCUMO3UpqvBUA9/OeGUHQgNAFIw/2oYR" +
            "DSajNNTMZuWF/yCY7Jb5MhRADUfo6hPlMxIMOZMpcSZSYhuURdrM+lUL72zENpj++l0dPtu+JFFUnrQN4yx/KnGTPxWLOy50KFBp" +
            "GwaGnbqnOB59JZiE+rHzeOqCdfhTB4IeAyVYk4BPIbd6OLK8W5D3WE+6rFZQAYwFJqKEZjRwhHMNR7WAVtvg2kibueqFBXeA4Sfc" +
            "3pA85u3HLgFOiZZX+HeMns/E/z7vj5ZFZvlTqZJQLLq6tJ17tk6aG+ssOZJVZz6Cz5ILdCiIqkU30hXBi5AL/S7yLlmrIv0VgA9Y" +
            "AnyNrnv476ANjXeAfwEbbQPKoiarT1uOz4L20howUmuaqqZRN3UJFz06b3Tt+6/MSxaxdtu4Uy9vi0xu2DBnGY3VwxnysY3POgD9" +
            "UoSwOrSZEkZImEvaY1Qgr7MeIaIgAjgb1fi8e/cx4HHgF8Cb3b0U7jDBMHhhwXKSQSiOK5h6+cQbov7UjfftHDV9zctzl324Z0TV" +
            "yMoWhlS2mMNsgyoUQR4LjAF+CTznXAAR4BTgx8A0p20IikB/mo2R/gpgMl0PLhhO+1XI3SVQKNuJAiIbSGLbRlnUClg+/D4LPxDa" +
            "XX1c6OnzHraiZbXzLB9DhzWnygzbLrcNKlGxpNwZ4xG65g9tqFyeAh5AwgKl2gUTwEqkb944udi57zl2dsiwrYOiuXhxJR3hSvwp" +
            "KI53KWrsQsj6HQqh4z10W4e2010BjM+Fkf4K4H3gYlS3X8gAz/L4U+YBgdgGbcDbyI6sR/HAdrLvE54OB9VBc9pDGIgXeA+4DXgI" +
            "uaHZqPo7DDjSaStD3sCPVMRE7imJVGM/WrVGFAe8iQxXK/Ax6fA5G81AWaVXLZ/N5cWBukET+Mi5XkOMfxXp7M/RBmeA9FEXC+mq" +
            "5fnfdC63RtBXOgLVGb21xc3Aw7m8nK9AqAjl8NcjV/Ug2unpa8kmiIzeNGTZJ6EQ+e9079Nrgfs4uPS+BbgEISor5UsAE9GKu6Ho" +
            "IqQCOxA6WpGbjDnPi1DkWIFUpgYY5bxzGIKyqzafQ7vJy1HVGNIe534UA+D0vQb4Dkqzc6J8CaAZ7eDOd/oc7Vz5ID/S733I5pSh" +
            "gxU3IYG1oYDrV8Dz9PFITb4E0ABcCPwIbYFXIDtQ1Ic+TGQDOp1rHzK0W5E32ICEcTHaQ9yJ4oJHkYr0i/KZDLUCV6OVmY0SlYnI" +
            "NVUiYbixu4UY7kAr2IiKqDuBegThHXQ1ikGk40vRrnLrQCddiH2BfWi16oEP0GqGESJcG5FEOhulb5BNAi/ma6KQfwG4+rkUlcOf" +
            "QBuhjWQPZAykOlWoXrCXbkvj+aV8C2AuOtDgnu89D1n17WiTpAkFPwkUA/gQOmpQDDESGbYxSB1WoECrP/FBTpRvAUQ4+HBzFXKJ" +
            "XnIjQVcAIbqnanRafCHKMNdSgBMi+SqJFSFhrgN+k8OYxWjle2LeJQMJYCoFOjTdVwRE0GRmoGyrFsE2jLK1G1E1ZjVKlE6if5+9" +
            "7EGh9QvO33p6jyrLgbOQ8X2/LwPlIoAgMB2VmmaijxkOQz55qzPBN9AOEMgLPIkg6+p0rfP/COQSSxEKTNJJUQNKfbejTM5NknKh" +
            "MPA94J9oAfbn+F5OArgFFRcme9qeRqv9kTNYZzfv7XWuTc59EWlV8SNVsJEtcAsocXLX8yGoSjQX7Sgfg4xsmDwL4Bx0lMVLM1BE" +
            "9hpCwU6ghd5hmiB9OKIvVIRQV4OQNAUlSy4aw85vEsj+7CEdb2T1HrkI4CF0ptd73GUMquu7qWybM3AjgvJelB+0omAnilBikk6H" +
            "A87Eg86Ey5F6VCC7MYJ0vd89OOEnjSAQWlpR6nsX2midjc4Y3UwOJ0tzEcCtKNZejmxBsWcSfue+FNmFnqg3WOdq3d3wuZN0AvQ4" +
            "MrgxpBI3AFc6v9+cS6e5CCCJjMspwAko45uO0tehaAVdJrz67V44z72M2p6/NuniiHuZzrhxpFq7UH6wBVWNNju/i6CcYzHyOlWk" +
            "c5J3c+CtT24wgfz8Ouc+hFa9mnQkF0aICKH6fRHp7wC9hi/hMOiqULsz8VakLi1InfY69wGn7xLkVS4FPoPcrBd5dehgxbO5MjWQ" +
            "SDCG/HM9+s7ni2jFLMRQjHTY6zLrXWm3VA5ptJQj/Z+CdD6CBDwOMVrRzTz2ILf5EirK7OoLE/kIhQ3E7DakFm76W4EY8maB/aUU" +
            "KpLuIG1cdyMP9BYqlzf39HJvlA8B2Egnb3b6c6vCY0hXh2tIfxHqQrm7MNxFhIHQ5KpGE+ni6zYULO1CKuKqUb/IyPb5/P87/Q/W6nTIvtsnvQAAAABJRU5ErkJggg==",
        name: "Java"
    },
    JAVA_FX: {
        link: "https://img.shields.io/badge/Java%20Fx-white?style=flat-square&color=330000&logo=data:image/png;base64," +
            "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFyGlUWHRYTUw6Y29tLmFkb2JlLnhtc" +
            "AAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PS" +
            "JhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDg4LCAyMDIwLzA3LzEwLTIyOjA2OjU" +
            "zICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8" +
            "cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtc" +
            "E1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3" +
            "NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2h" +
            "vcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjIuMCAo" +
            "V2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIzLTAzLTA0VDExOjM4OjQ4KzAxOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIzLTAzL" +
            "TA0VDExOjM4OjQ4KzAxOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMy0wMy0wNFQxMTozODo0OCswMTowMCIgeG1wTU06SW5zdGFuY2VJRD" +
            "0ieG1wLmlpZDplNzg0YjgyMy00MDcyLTE1NGItODEzZi1hNjY4ZDY5MzU2MTYiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnB" +
            "ob3Rvc2hvcDo2NzIxNjE5MC1jNDA2LTZjNDUtOTY3Ni01Y2M2ZDNkYTcyYTgiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRp" +
            "ZDo2ZGIyNjgxMi0wZTU4LWIxNDctYmJmZi05ZTY0NWQ0MjZlNWMiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb" +
            "2RlPSIzIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2" +
            "VJRD0ieG1wLmlpZDo2ZGIyNjgxMi0wZTU4LWIxNDctYmJmZi05ZTY0NWQ0MjZlNWMiIHN0RXZ0OndoZW49IjIwMjMtMDMtMDRUMTE6Mzg" +
            "6NDgrMDE6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi4wIChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0" +
            "OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZTc4NGI4MjMtNDA3Mi0xNTRiLTgxM2YtYTY2OGQ2OTM1NjE2I" +
            "iBzdEV2dDp3aGVuPSIyMDIzLTAzLTA0VDExOjM4OjQ4KzAxOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMj" +
            "IuMCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9" +
            "uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+g8iOrwAADAZJREFUeJzFm3+MXcV1xz9n7n2/39t9613v" +
            "T/wLMLaxAxgbhapEcSIFkjZKA1ZcNS5tCWlaSopC1Uo0bdIATVNaIZIoEUEJJFFbhx8BGUJKGgilxC7EiU1iYwy22fXaeL3r3fX+evt+3" +
            "zn94761vPZa+N33o1/p6b67O3NmzvfNnHPmzIyoKtXira1/VXUdALUhku1vkmw/hNoQoICgaghFJ+7JjK/698Js50ERL5D8ZQ9tq7qOG6" +
            "iloBCPwmwX4nigAoBah2T7oZvCsakNqvLFSHKkqV1qKgEilnIxyczoalBB1SEUnYp0r/rJfZPH1//H5ImrcZxCYPk9Aeo0dwQAqkI4NoH" +
            "j5rFemMSitz/qhguXYrw3U+2HEFNuan+aToAIeKUY1guh1iWePrLVehCJjw+HI1Mg1dukWtBcAlRQDMYp0r7kFVQ0EUmMblQVQtGJgqqL" +
            "bxibh2AEVAxYVVUQjFNswzqz4pSK8fRRENttTLkbFVCjvu7Vy64FgQgwoXx1FVQQU462du/dlJ1c9rQbnsF6IRAtGTdfMqKh/GxXWznfA" +
            "mKDdAmAWIA6gQgIRaaqKq82RDx95HqvGO+ZPrnWRlNDRBLjqMpwa9feQTc2u6ZcSL1n9Mj7nzNucC/QEaBOIAKcULaK0gKap6Vz/5+Wi6" +
            "nHQ9EZSoUkU8PvQdUpRhKjO8Oxw2sSiw7/TnZy6b8g2tRJYIJVkwv+qBqMU2wPRac3lYvJXCHbgS3HiCRPEk0NUcwt+oG1EImf+u1QZPr" +
            "KOQ8R5BMEgUZAuue1KkoLYkorHbeQLOVT6fxMF8YtYaSIVZfs5NKXWzv37XajuQ2J9rdvy04t/XNtYiwQiIB4erDaKp0KxFqGlhdmexBT" +
            "xHphbCGKV0yUJ4Y2fnXxip//W6Jt4A9n0xd/pZRPD4oJth6oFoEImBldc8FlK+5vINl+iFB08ho3PI2YMuVCCq8UBYHM+CXb0z27B0LR7" +
            "IrEooGtmbGV/9SsiDAQAWOD77vwwr4LPBBNndgXis1sKuYWXVbMdhwUU8I4RQC8UjyTnVzxWLp3/12hyORN+UzXfUBThkAgAlKLD1RVXt" +
            "UpZyeWfyXds29b+5JX/jGf6d7ihjOU8mly070gUMq3/th6clcofmpt92XPLVM1/c2ICgMRMDm0oaryFU/wWKz12GeSiwc/MTux/GOnjl3" +
            "7jBPKkVp8ACeUA3TAK4VnHLeYiiRGuoD+IH2rFoEIEF04WlNZ2IOLeHilqB0b2HRH39qnf5Xu+c390yfXvVTMtU2PDV6HWhc3nMmkFr+Z" +
            "gULKlmMzQaIBp+oaAQnwzLnhg1ElokWKZmGRjlsgM75y39TI6m+mew/cuWjJq38weXzDQ+IWK//Ph8SUE6VCy+Hhgx855McRC08BqbTnW" +
            "m8eTV0BdAlEwANXfGjeu8UQpsSHh/awfuwYBSJYHM5RQCyTQxsfbFl86I5Yyzs3ZcYueyiSGqa18w1UdZEbKrSMHd9wd+bUysKcgTwTjl" +
            "rCXhlPDOPRBMcTbRSNc5qETwTQJRABI/GWc/5mMXz7kuu5LvUWN088iWDxOHt5KwCHS/lEfzR5cvmSK56QzKnlOrD7U7T17t7ghv93/+T" +
            "wld9y3BxyxqJIUCJemalwjF3tF3M8kea1jqXMumGsGKTSRtMIcO1CNsCiCC92ryPU1c/nuAeD4s2LthUQFaMT2cmLpsaObFJjisTTR5xk" +
            "x8ErRwc23VIuJrOmEgPMKV42Djt6VvJ83+WcjLcgqoRtmbD1qNVb1jUhIihJL8t/cSMqwp3mHhxj56cPVEGgMNv5lFpDPtuNqiQnjm98J" +
            "Dd90UFjvNOKl4zLno5lvNS7irdbF+OoEiufOzVqQUMyQklm+CkfR4ohbh15krK4zFl1ES8WTx/9RT7TvQ2xIBa1kalitmPKMSVCRUPJmH" +
            "mKi0LEa0xk2LCUWEJn+Jl7A5eeinH12CDZUAQPgxgv2drz2jfdUGY6nppiNreagucS1Tx5jbOnfSkv9TVe8Tk0jAABQhR4dM16hofiXDv" +
            "ST7qQoSjuWO74ulHEsruth/3Letl4cpDZeBsv9KzjcLIXEW244nNoaFLUUUvWDbN9xVXs7L6U604c4pqTAzqWSvFi32r2L+qlZFxe6boY" +
            "TxysCBFbamSXzkHDs8KOWmJly2Q4xvYV63mpbxU5J0TRcQl7Hq4togiOerjNTQgDTUyLu2pxPX9EnD23pcmp8Hn9qqOsFcDdle/n1cgE2" +
            "Iw9Aw6wE3gUmKhF0BzqSUAXcHMd5Z0PW4EvAS8AdwDjtQirJwHNyWH57XQAn8TfCthMDYmDgFnh/1f8AFgH7ANuBKpLTpyFehLQLEs2DR" +
            "wAvlF5v7YWYfUkIEdzpsHcrsyJyrOtFmH1JGAcmKyjvPPhncqzt/I8VYuwehIwChyro7zz4fXK83crz1/XIqyeBHjAL+sobyGMAS8D78U" +
            "n4C3gV7UIrLcXeLbO8s7Gy8BVwGP4fb8HCL6dTP0JeBEYqLPMM/EBYBewDHgQqP5c3FmoNwEZ/I41Ah6QxLf+fwfcXg+hjVgMPQR8Bri0" +
            "znL/DPgffG9Tl3UANCYSnAb+kvoGRk8ADwOHqaPy0LhQ+CfAF+okax/wF3WSdQ4auRb4MnBfjTJeB34P3/01BI1eDN0F/EPAujuBD9FYr" +
            "9KU1eD3AtZ7GBiuYz8WRDNSYkeBO/E9w4Vs4Cp+RPn9RnZqDrUSsAY/JH23VWABP3p7t7Owc1vCY8BneXfCpCL7EfzVaNWolYAO4F9rlF" +
            "ErjgLfCVq5VhuwE/hujTJqQRH4Gw+nkCURSECtI8ACnwaeAZZX3usCD4f5B6cVg8XiIFgxWA/4RZbEL9sY54P8J7C+6nYCnhavPP3+WWB" +
            "7IDkLoEQYD4d2RjFnmJYyIbIkSTNOhhZmSQFwgz7JFvM9evUd4N6q26vZCyiKWPVvQpznjNCFwsOhl0E+5j7Gb5kXCedLpwdBgRijppM+" +
            "c5QhlvCEdwtdHOPTfL3Sj2AH7SXIrbHNX9tRqc0WRdvE8ghQUqmcEDZ+b6wVnyDEvwgiZ7kAVUR8ElVdHPH4mtlKn3MMhE7yRM7QahaDY" +
            "uhAOEaZvCqUISbGXOSoPSF3aKZaXQIZQcWiWEC/JMiDKpLyT4id+xvoeV/mQ1DyxHhbV4FHp1c2uzzXHPYcc7TyedyqXOupOeBZ8x1PBE" +
            "/AOPJdEfZZMRcH0aXWKTALzJze3FM6gY1AiypvAHvxXeVq/EXNVMXVrwUiwB5gCcjVgoaB3zypf3xwo+yMRMn3KTJgVO8DBMNxdXkeyx5" +
            "gK8j9xkhJ4fcFfojo3iAKBCTgrF9aySFcJcJ/gxhVIhXZnzLIgPiprHsR+aJAC/Bz4FUVvgqyXaCAkAxTKPSzesuArnxlrew1HnJY4eHKD" +
            "UPUA5TPY+R5hH+2YAWKCn8f1PoEmgIigswf8o6BLOhngW6BPmBM4HMCrwFjKmy2lBHse4E20GdEGQE+KVY61bIOiIjaW9W/N1MClqjIjV" +
            "bkJmvlCkEwIV7A8ARwvcCHgQdU9a0Fz21dAOqzFlDCwEFEYqLcZYVugTAQxU+TPS1wq2CWKNyAb/d+qkq/CElr7L0oXSBW5fToyeFvgT3" +
            "lNyLfV+FPiCoUGTgdcagOOKKB71oFM4KiczfHbEXGrAqbgT0q8n7xN0j8ox4Kiv6wosQfgXwEeBUx/Ri5E9ghyOUhxzkp/pCe0yUO7FLk" +
            "ClW5UpG/LXlKOSOXUOQ2fPsyisjnFWkNetEmaCh8NUY+CCxVyGO0CHwUf/v/ZvxsUBlwBINDbIdghoG/Bi4HHrXqIehmlJyq3miQBxDOn" +
            "FcGmBR0H8Je0BOVq9Z3i5ACbgHuB5Za5Page3LBCLByO2p/BnSLtduMZwH9EWBFdBe+xU8oKqJG2vOLM64NPati0/gj49my9bCqj4tITE" +
            "QGCtbboYpX6ZPgT4OkT4fvZMKOfMCIbFX4MbDHwreBcYG7UQ2UhA12Wlz0XpAdwJh49jmxHtYJPyXo+0CuQfXXwIggXZ6UdSR+BGPNF0T" +
            "Ns8A4SH/YhAH9uqJvoKwV0Z0WPFF1QHIYHsbq60b9eaaAKr0C21Tly/5dJHsK5DYV3eJmpQc/aVoV/g916twk90Y6cwAAAABJRU5ErkJggg==",
        name: "Java Fx"
    },
    JAVASCRIPT: {
        link: "https://img.shields.io/badge/Javascript-white?style=flat-square&logo=javascript&color=a1a3ac",
        name: "Javascript"
    },
    PHP: {
        link: "https://img.shields.io/badge/Php-white?style=flat-square&logo=php&color=13001F",
        name: "Php"
    },
    LARAVEL: {
        link: "https://img.shields.io/badge/Laravel-white?style=flat-square&logo=laravel&color=FFB4B4",
        name: "Laravel"
    },
    SYMPHONY: {
        link: "https://img.shields.io/badge/Symfony-white?style=flat-square&logo=symfony&color=4B4A4A",
        name: "Symphony"
    },
    TYPESCRIPT: {
        link: "https://img.shields.io/badge/Typescript-white?style=flat-square&logo=typescript&color=000844",
        name: "Typescript"
    },
    REACT: {
        link: "https://img.shields.io/badge/%20-React%20JS-white?style=flat-square&logo=react&color=2153ff",
        name: "React Js"
    },
    NEXT: {
        link: "https://img.shields.io/badge/Next%20Js-white?style=flat-square&logo=next.js&color=000000",
        name: "Next Js"
    },
    VITE: {
        link: "https://img.shields.io/badge/Vite%20Js-white?style=flat-badge&color=9854bf&logo=data:image/png;base64," +
            "iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAC4jAAAuIwF4pT92AAAFcmlUWHRYTUw6Y29tLmFkb2JlLnh" +
            "tcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxucz" +
            "p4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4xLWMwMDAgNzkuZWRhMmIzZiwgMjAyMS8xMS8xNC0xM" +
            "jozMDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgt" +
            "bnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB" +
            "4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcm" +
            "cvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0P" +
            "SJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhv" +
            "dG9zaG9wIDIzLjEgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0wMi0xMFQyMDo0NToxNyswMTowMCIgeG1wOk1ldGFkYXR" +
            "hRGF0ZT0iMjAyMy0wMi0xMFQyMDo0NToxNyswMTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMDItMTBUMjA6NDU6MTcrMDE6MDAiIH" +
            "Bob3Rvc2hvcDpDb2xvck1vZGU9IjMiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjliMDYyZ" +
            "GM4LWU2ZWEtZDg0Mi1hNWYwLWE0Y2QxMmE4ZjcwMCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5YjA2MmRjOC1lNmVhLWQ4NDIt" +
            "YTVmMC1hNGNkMTJhOGY3MDAiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5YjA2MmRjOC1lNmVhLWQ4NDItYTVmMC1" +
            "hNGNkMTJhOGY3MDAiPiA8cGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8cmRmOkJhZz4gPHJkZjpsaT45RkY5MUFCRDdERDY0RD" +
            "UwMEJFREU0OTFDNTVCQjg5QjwvcmRmOmxpPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8eG1wTU06S" +
            "GlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjli" +
            "MDYyZGM4LWU2ZWEtZDg0Mi1hNWYwLWE0Y2QxMmE4ZjcwMCIgc3RFdnQ6d2hlbj0iMjAyMy0wMi0xMFQyMDo0NToxNyswMTowMCIgc3R" +
            "FdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIzLjEgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3" +
            "J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pl0HNLAAAAVgSURBV" +
            "EjHnVYJbBRlFP5nZmdnd+m2e852j5buVaiUkoIYrCUcilA5JXIEQahQQGMTjnLUpCGRQ2pNTWmxQtEqCCqIkUIBEURbsBzlFioYgQQB" +
            "Q0RRUJIW+vn+7RRrA6Vlk293szvzvve99733D3PrA+wRIGgQW0B40PUdCSoRdAQ9wRgrB4w2liAZWRxzSn7JqwR1DyJqGUR8AHQefUC" +
            "xM79sYPGMMS/BQ/AxPQtJYWf3uJAl7FJlPyeXWykTmknoSyQLWWUqczGv6JYDBp4th08JRNsEv1FiARZwJAUz0lOHzXq5z9yy/H5rDu" +
            "0ZcvjX40OupMQmpuhZPFdqViWfzk5xYvV+Si4SV2Qaq96jhMxuU9juYBYxhvI0E2KYyCT65o/2JuzblLb/j4sDbuDmQAAc/Qh9UVfR+" +
            "TTTXrrIfdGCxxCyepVwNMVVeJk5iU5lDsFrfsz9TMXli4M+qT305KyyVamj5s/r2uuFMWJUj/j0YHwG6h8HbqcCP3cHzhLqegD1iY1v" +
            "zEgqtjiHpz/de07umGdLSxdMOfD9sqxrV4JRvQIWZo3Ej7zF6uKMFkES+r9dXZ1F+U0+A0w7TtgLDC27/feC0q9/QV3wLs4mAqeJ4Id" +
            "k4Ec/Gk93bszLvf5n1nRg5TJg7XJgdxGQO/roMaOg6FSdz9BMIrmpVDZmkt2mUJfxO+rrM6uIaCOQRRi3HijZeRk44wZOBoATScDxrq" +
            "TEjt+rBuH9gkvY+3EZ1i8+gxWvAuUEvykl1cD0IrUgupmE98TokcOqiWraZ+iywtnHgKnrgJnlwBjK7L311ZS9GTjqB46EgcNBoDaAh" +
            "ppuRCYB5xjKc85jYzYwqeeqD3l/PHJIpbim5sYLEe8rQYtDcFhtzOx5qejqtXnbgexS4MV8YN3aSlIgUnAPcDABqOEgwhofcIHhQEkJ" +
            "isYDqyf8dcshuRPNQozZowStWuOF5jmRImr0ibEGyiI1OTN70VYgpwSYuAjYtWEFcJ6RCh0aq4mgOo5ABLUKGr6LQ+mUBmydBowMvr6U" +
            "q/Dqw25NhdR6GPkgmV2STzUyZpycfeTkWxuA1/KAT9/dgaq1edhcuBX1u0PAvk7ANyqVkOFQwQqUPw8UZVy4ZGQGp01y2WjuYrR4Quu" +
            "1wntj8ChhTiJ0UQeMyCclb5Fj8uZTjyZRoJybQJUAfKsA+yXU73Tho/F3sGMc0N818ZWICiXRpQ2ydL/dJWi7KcqtC7hFumHCsM+3lR" +
            "PR8jnAAiI5spJqd4LhTqWTSsVQu7gQXzwHLE07eJQuV1RdHCcwt1RxvwXJ1ShkPVsUMxlpcnsW5tTfKVsIFGQ2YlvuV9i5sBK3NpGVd" +
            "zFsHn0X2zOAFHO/4QKppyl38mpocdrcwlxmJ48+zLcgG5WaX1xBfVkztREFw4FiCoo9DOeWzMGu/qSw25eV/Drad+5IFZqqITyMpGmX" +
            "6YMWq2i30i7yFo69cq1iJhEMpp7PogndwrB7RAO2pAHx+i699YLRwNVrlhXbe55ELE1NjOVZDvBNm72XLLq6L3D5nQxcWjIW+3sDMxK" +
            "KVzdZNvQ/y7aX5J6lnTqvSvU2vZl27NS+kcCpeYtQN/YqPkv+54ZFtPujJGsMV60dZmJHT8aIpamZKs+2R/TAUQeG0QJMpyX8FK0b19" +
            "w8/ruP1La2bEdI/rO07HfzgAtDm7ZgCPBBUt1PEpPMNp3bQf/HtLZsR8/4e5am5soBpXuvmid+uz7Ynjm9SUVY1SwrtRWnPQ8QXI2Jl" +
            "80iqVT75CSH7OND59Qs26aK9j6tcDUyNbcTL02UaBWdclwUOcrcVrMf5ZFIbPE4pGifslYm4WH3/wv6tIO1YP3N6AAAAABJRU5ErkJggg==",
        name: "Vite Js"
    },
    TAILWIND: {
        link: "https://img.shields.io/badge/%20-Tailwind%20Css-white?style=flat-square&logo=Tailwind%20CSS&color=8187B4",
        name: "Tailwind Css"
    },
    FIREBASE: {
        link: "https://img.shields.io/badge/%20-Firebase-white?style=flat-square&logo=firebase&color=D18511",
        name: "Firebase"
    },
    VERCEL: {
        link: "https://img.shields.io/badge/%20-Vercel-white?style=flat-square&logo=vercel&color=ACACAC",
        name: "Vercel"
    }
}

export const descriptions = {
    UHC_Run: "L'UHC Run est un mode de jeu minecraft de type survie. Ce plugin est fait à l'aide du framework Spigot, et il est " +
        "open source et disponible sur mon Github.",
    Matermind: "Mastermind est un jeu bien connu ou vous devez trouver une combinaison de cinq couleurs dans un ordre précis." +
        " Cette fois le jeu revient en version jeu sur ordinateur, et programmé en Java FX.",
    Spotifree: "Spotifree est un site de streaming de musique librement inspiré d'un autre site de streaming bien connu." +
        " Il est programmé en Php et avec Tailwind Css pour le style de la page.",
    Portfolio: "Le portfolio est le projet le plus important que j'ai réalisé jusqu'à maintenant. Il est mon moyen de montrer ce que je sais" +
        " faire et ce que j'ai déjà fait. Il est mon premier projet en javascript et qui utilise React."
}


export const mastermind = [
    Technologies.JAVA, Technologies.JAVA_FX
]

export const spotifree = [
    Technologies.PHP, Technologies.TAILWIND
]

export const UHC_Run = [
    Technologies.JAVA
]

export const Portfolio = [
    Technologies.VITE, Technologies.JAVASCRIPT, Technologies.REACT,
    Technologies.TAILWIND, Technologies.FIREBASE
]