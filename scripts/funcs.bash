# Utility functions. Inspired by https://github.com/Originate/guide/blob/master/android/guide/Continuous%20Integration.md

function waitForAVD {
    local bootanim=""
    until [[ "$bootanim" =~ "stopped" ]]; do
        sleep 5
        bootanim=$(adb -e shell getprop init.svc.bootanim 2>&1)
        echo "emulator status=$bootanim"
    done
}
